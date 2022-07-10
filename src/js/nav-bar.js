///////////////
/// Nav-bar ///
///////////////

export function init_nav_bar() {
    // Create background
    $(".nav-pannel").after("<div class='nav-pannel-dark-screen'></div>")
    // Show pannel
    $(".nav-pannel").show()
    // Event
    $(".nav-burger").on("click",open_nav_pannel)
    $(".nav-pannel-close,.nav-pannel-dark-screen").on("click",close_nav_pannel)
    $(".nav-dropdown").on("click",click_nav_dropdown)
    // Resize
    $(window).on("resize",close_nav_pannel)
    $(window).on("resize",() => { $(".nav-dropdown-pannel").hide() })
    // Click outside
    $(document).on("click",(event) => {
        if (!$(event.target).closest('.nav-dropdown').length) {
            $(".nav-dropdown-pannel").hide()
        }
    })
}


function open_nav_pannel() {
    $(".nav-pannel").css("left", 0)
    $(".nav-pannel-dark-screen").show()
}

function close_nav_pannel() {
    $(".nav-pannel").css("left", -$(".nav-pannel").outerWidth())
    $(".nav-pannel-dark-screen").hide()
}

function click_nav_dropdown() {
    var dropdown = $(this).children(".nav-dropdown-pannel")
    if (dropdown.css("display") === "none") {
        $(".nav-dropdown-pannel").hide()
        dropdown.show()
    } else {
        dropdown.hide()
    }
}