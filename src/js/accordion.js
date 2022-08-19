//////////////////
/// accordion ///
/////////////////

export function init_accordion() {
    $(".accordion-title").on("click", open_close_accordion)
}

function open_close_accordion() {
    //let accordion = $("#"+$(this).attr("for"))
    let accordion = $(this).parent()
    if (accordion.hasClass("accordion-close")) {
        accordion.removeClass("accordion-close")
        accordion.addClass("accordion-open")
    } else {
        accordion.removeClass("accordion-open")
        accordion.addClass("accordion-close")
    }
}