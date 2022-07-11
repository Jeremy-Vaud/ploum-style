//////////////////
/// Formulaire ///
//////////////////

export function init_form() {
    // Disable submit
    $("form").each(disable_form_submit)
    // Inputs
    $(".required").on("change", function () {
        check_input($(this))
    })
    // Ajax button
    $(".btn-ajax").on("click", ajax_btn_call)
}

function disable_form_submit() {
    // Return false on submit and call function to check all required inputs
    let method = $(this).attr("method")
    if (method === "ajax" || method === "post") {
        $(this).on("submit", () => { return false })
        $(this).find("button[type=submit]").on("click", check_form_data)
    }
}

function check_form_data() {
    // Chek all required inputs
    let form = $(this).parents("form")
    let method = form.attr("method")
    let error = false;
    form.find(".required").each(function () {
        if (!check_input($(this))) {
            error = true
        }
    })
    if (!error) {
        if (method === "post") {
            form.off("submit")
        } else if (method === "ajax") {
            submit_ajax_form(form)
        }
    }
}

function check_input(input) {
    // Check one input value
    let isValid = true
    let alert = $(".alert-input[for=" + input.attr("id") + "]")
    if (input.attr('type') === "checkbox") {
        if (!input.prop('checked')) {
            isValid = false
        }
    } else {
        if (typeof input.attr("regex") === "undefined") {
            if (/^$|\s+/.test(input.val())) {
                isValid = false
            }
        } else {
            let regex = new RegExp(input.attr("regex"))
            if (!regex.test(input.val())) {
                isValid = false
            }
        }
    }
    if (!isValid) {
        input.addClass("invalid")
        alert.show()
        return false
    }
    input.removeClass("invalid")
    alert.hide()
    return true
}

function submit_ajax_form(form) {
    // Prepare ajax call when form is submit
    init_loader()
    let data = new FormData(form[0])
    data.append("action", form.attr("data-action"))
    ajax_call(form, data)
}

function ajax_btn_call() {
    // Prepare ajax call when click on a button
    init_loader()
    let data = new FormData
    $.each(this.attributes,function() {
        if(this.name.startsWith('data-')) {
            data.append(this.name.substring(5), this.value)
        }
    })
    ajax_call($(this), data)
}

function ajax_call(elt, data) {
    // Send ajax call
    $.ajax(ajaxUrl, {
        method: "post",
        data: data,
        processData: false,
        contentType: false,
        dataType: "json",
        beforeSend: () => { $(".loader").show() },
        complete: () => { $(".loader").hide() },
        success: successAjax.bind(elt),
        error: errorAjax.bind(elt)
    })
}

function init_loader() {
    // Loader for ajax call
    if ($(".loader-background").length == 0) {
        $("body").append("<div class='loader'><div class='loader-background'><div class='loader-circle'></div></div></div>")
    }
}


function successAjax(data) {
    // Ajax call success
    let success = this.attr('success')
    if (success !== undefined) {
        window[success](data)
    }
}

function errorAjax() {
    // Ajax call error
    let error = this.attr('error')
    if (error !== undefined) {
        window[error]()
    }
}