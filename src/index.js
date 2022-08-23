// Style
import './scss/index.scss'

// Jquery
import $ from 'jquery'
global.$ = $

// Nav-bar
import { init_nav_bar } from './js/nav-bar'
$(() => {
    init_nav_bar()
    init_modal()
})

// Modal
import { init_modal, hide_modal } from "./js/modal"
global.modalFunc = {}
global.modalFunc.hide = function () { hide_modal() }

// Breaking-space
import { init_breaking_space } from './js/breaking-space'
$(() => {
    init_breaking_space()
})

// Form
import { init_form } from './js/form'
global.ajaxUrl = "https://example.com/ajax.php"
$(() => {
    init_form()
})

// Caroussel
import { init_caroussel } from './js/caroussel'
$(() => {
    init_caroussel()
})

// Accordion
import { init_accordion } from './js/accordion'
$(() => {
    init_accordion()
})

// Tabs
import { init_tabs } from './js/tabs'
$(() => {
    init_tabs()
})