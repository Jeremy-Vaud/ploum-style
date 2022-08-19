# Ploum-Style

Quickly customize your own css and create ajax event inside HTML tags

## Install

`npm ci`

## Usage

Ploum-Style use [Parcel](https://parceljs.org/) as bundler to generate css and js files for your project.

Many css classes are already implemented you can see examples of use by startting a development server.

Start a development server :

`npx parcel index.html`

### Customize css

Edit variables in the file : *src/scss/index.scss*

### Nav-bar

Example : 

```
<div class="nav-bar">
    <span class="nav-burger">burger</span>
    <span>Nav-bar</span>
    <div class="nav-pannel">
        <p class="text-right nav-pannel-close">close</p>
        <nav>
            <span>link</span>
            <span>link</span>
        </nav>
    </div>
    <nav class="nav-links">
        <span>link</span>
        <div class="nav-dropdown">
            <span>drop</span>
            <div class="nav-dropdown-pannel">
                <span>link</span>
            </div>
        </div>
        <span>link</span>
        <div class="nav-dropdown">
            <span>drop</span>
            <div class="nav-dropdown-pannel">
                <span>link</span>
            </div>
        </div>
    </nav>
    <nav class="d-md-none">
        <span>link</span>
        <span class="ml-3">link</span>
    /nav>
</div>
```

### Modal

Button to show modal :

```
<button class="open-modal" data-id-modal="modal-test">Modal</button>
```

Modal :

```
<div class="modal" id="modal-test">
    <p>Text</p>
    <button class="close-modal">close</button>
</div>
```

### Caroussel

To use the carousel class, you must assign it a height value.
If you want auto scroll use auto attribute with value in milliseconds.

```
<div class="caroussel" style="height: 300px" auto="2000">
    <img src="image-1" alt="image">
    <img src="image-2" alt="image">
    <img src="image-3" alt="image">
</div>
```
### Accordion

Use class 'accordion-open' or 'accordion-close' to start with an open or close accordion :

```
<div class="accordion-open">
    <h3 class="accordion-title">Open accordion</h3>
    <div class="accordion-content">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </div>
</div>
```

### Form

You can use required inputs with regex in your forms

Required input whith alert example : 

```
<span class="alert-input" for="input-txt">Invalid</span>
<input id="input-txt" type="text" regex="^[a-zA-ZÀÂÉÊÈËÌÏÎÔÙÛÇÆŒàâéêèëìïîôùûçæœ '-]{3,20}$"/>
```

### Ajax

You can create ajax forms by assigning the value 'ajax' to the 'method' attribute of an html tag and add your own function after the call with attributes 'success' and 'error'.

You can also create buttons capable of sending an ajax call by assigning them the class 'btn-ajax'.

Example :

```
<button class='btn-ajax' data-action='delete' data-id='1' success="success_function" error="error_fuction">Delete</button>
```

## Build

`npx parcel build index.html`