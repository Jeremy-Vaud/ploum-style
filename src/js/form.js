//////////////////
/// Formulaire ///
//////////////////

import $ from 'jquery'

export function init_form() {
    // Disable submit
    $("form").each(function () {
        let method = $(this).attr("method")
        if (method === "ajax" || method === "post") {
            $(this).on("submit", () => {return false})
            $(this).find("button[type=submit]").on("click", check_form_data)
        }
    })
    // Inputs
    $(".required").on("change", function () {
        check_input($(this))
    })
}

function check_form_data() {
    // Chek all required inputs
    let form = $(this).parents("form")
    let error = false;
    form.find(".required").each(function () {
        if (!check_input($(this))) {
            error = true
        }
    })
    if (!error) {
        submit_form(form)
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

function submit_form(form) {
    // Submit form
    let method = form.attr("method")
    if (method === "post") {
        form.unbind()
        form.submit()
    } else if (method === "ajax") {
        //////////////////////////////////
        // à faire ///////////////////////
        //////////////////////////////////
        console.log("ajax")
    }
}