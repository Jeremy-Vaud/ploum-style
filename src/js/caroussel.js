//////////////////
/// Caroussel ///
//////////////////

export function init_caroussel() {
    // Create arows
    $(".caroussel").prepend("<span class='arrow-left-caroussel'></span>")
    $(".caroussel").append("<span class='arrow-right-caroussel'></span>")
    $(".arrow-left-caroussel").on("click", prev_caroussel_img)
    $(".arrow-right-caroussel").on("click", next_caroussel_img)
    // Init
    $(".caroussel").each(init_caroussel_img)
}

function init_caroussel_img() {
    // Positions of images
    let i = 0;
    let img = $(this).children("img")
    img.each(function () {
        $(this).css('left', i + "%")
        $(this).css("display", "block")
        i += 100
    })
    $(this).attr("last-pos", i - 100)
    img.last("img").clone().css("left", "-100%").prependTo($(this))
    // For loop (auto)
    if ($(this).attr("auto")) {
        setInterval(next_caroussel_img.bind($(this).children(".arrow-right-caroussel")), $(this).attr("auto"))
    }
}

function prev_caroussel_img() {
    let caroussel = $(this).parent()
    let caroussel_width = caroussel.width()
    let transition_duration = parseFloat(caroussel.children("img").css("transition-duration")) * 1000
    let clone_pos = caroussel.attr("last-pos") + "%"
    let delete_pos = parseInt(caroussel.attr("last-pos")) + 100 + "%"
    // Unbind arrows
    caroussel.children(".arrow-right-caroussel").off()
    $(this).off()
    // Moving img    
    caroussel.children("img").each(function () {
        let img_pos = 100 * $(this).position().left / caroussel_width + 100 + "%"
        $(this).css("left", img_pos)
        if (img_pos === delete_pos) {
            $(this).remove()
        } else if (img_pos === clone_pos) {
            $(this).clone().css("left", "-100%").prependTo(caroussel)
        }
    })
    // Add event to arrows
    setTimeout(rebind_caroussel_arrows.bind(caroussel[0]), transition_duration)
}

function next_caroussel_img() {
    let caroussel = $(this).parent()
    let caroussel_width = caroussel.width()
    let transition_duration = parseFloat(caroussel.children("img").css("transition-duration")) * 1000
    // Unbind arrows
    caroussel.children(".arrow-left-caroussel").off()
    $(this).off()
    // Moving img    
    caroussel.children("img").each(function () {
        let img_pos = 100 * $(this).position().left / caroussel_width - 100 + "%"
        $(this).css("left", img_pos)
        if (img_pos === "-200%") {
            $(this).remove()
        } else if (img_pos === "-100%") {
            $(this).clone().css("left", caroussel.attr("last-pos") + "%").prependTo(caroussel)
        }
    })
    // Add event to arrows
    setTimeout(rebind_caroussel_arrows.bind(caroussel[0]), transition_duration)
}

function rebind_caroussel_arrows() {
    $(this).children(".arrow-left-caroussel").on("click", prev_caroussel_img)
    $(this).children(".arrow-right-caroussel").on("click", next_caroussel_img)
}