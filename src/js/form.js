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
}

function disable_form_submit () {
    let method = $(this).attr("method")
    if (method === "ajax" || method === "post") {
        $(this).on("submit", () => { return false })
        $(this).find("button[type=submit]").on("click", check_form_data)
    }
    if(method === "ajax" && $(".loader-background").length == 0) {
        $("body").append("<div class='loader'><div class='loader-background'><div class='loader-circle'></div></div></div>")
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
    let data = new FormData(form[0])
    data.append("action",form.attr("data-action"))
    $.ajax(ajaxUrl, {
            method: "post",
            data: data,
            processData: false,
            contentType: false,
            dataType: "json",
            beforeSend: () => {$(".loader").show()},
            complete: () => {$(".loader").hide()},
            success: successAjax.bind(form),
            error: errorAjax.bind(form)           
        })
}

function successAjax (data) {
    let success = this.attr('success')
    if( success !== undefined ) {
        window[success](data)
    }
}

function errorAjax () {
    let error = this.attr('error')
    if( error !== undefined ) {
        window[error]()
    }
}