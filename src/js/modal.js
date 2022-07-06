/////////////
/// Modal ///
/////////////

import $ from 'jquery'

export function init_modal () {
    $(".modal").show()
    $(".modal:last-of-type").after("<div class='modal-dark-screen'></div>")
    $(".modal-close,.modal-dark-screen").on("click",hide_modal)
    $(".open-modal").on("click",show_modal)
    $(".close-modal").on("click",hide_modal)
}

function show_modal() {
    // Show background
    $(".modal-dark-screen").show()
    // Disable scroll
    $('html').css({
        overflow: 'hidden',
        height: '100%'
    })
    // Show modal
    $("#" + $(this).attr("data-id-modal")).css({
        "transform": "translate(-50%,-50%)",
        "top": "50%"
    })
}

export function hide_modal() {
    // Hide background
    $(".modal-dark-screen").hide()
    // Activate scroll
    $('html').css({
        overflow: 'auto',
        height: 'auto'
    })
    // Hide modal
    $(".modal").css({
        "transform": "translate(-50%,-100%)",
        "top": "0"
    })
}

