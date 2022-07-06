// Style
import './scss/index.scss'

// Jquery
import $ from 'jquery'
global.$ = $

// Nav-bar
import { init_nav_bar } from './js/nav-bar'
$( () => {
    init_nav_bar()
    init_modal()
})

// Modal
import { init_modal, hide_modal} from "./js/modal"
global.modalFunc = {}
global.modalFunc.hide = function(){hide_modal()}

// Breaking-space
import  {init_breaking_space } from './js/breaking-space'
$( () => {
    init_breaking_space()
})