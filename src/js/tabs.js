////////////
/// Tabs ///
////////////

export function init_tabs() {
    $(".tabs > li").on("click", change_tabs)
    $(".tabs-active").each(function () {
        $("#" + $(this).attr("for")).show()
    })
}

function change_tabs() {
    if (!$(this).hasClass("tabs-active")) {
        let active = $(this).parent().children(".tabs-active")
        active.removeClass("tabs-active")
        $(this).addClass("tabs-active")
        $("#" + active.attr("for")).hide()
        $("#" + $(this).attr("for")).show()
    }
}