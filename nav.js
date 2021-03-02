var mens_link = document.querySelector('#mens-link');
var mens_dropdown = document.querySelector('.mens-dropdown');

var womens_link = document.querySelector('#womens-link');
var womens_dropdown = document.querySelector('.womens-dropdown');

var accessories_link = document.querySelector('#accessories-link');
var accessories_dropdown = document.querySelector('.accessories-dropdown');

mens_link.addEventListener('mouseover', menVisible);
mens_dropdown.addEventListener('mouseleave', menHidden);

womens_link.addEventListener('mouseover', womenVisible);
womens_dropdown.addEventListener('mouseleave', womenHidden);

accessories_link.addEventListener('mouseover', accessoriesVisible);
accessories_dropdown.addEventListener('mouseleave', accessoriesHidden);

function menVisible() {
    mens_dropdown.style.visibility = 'visible';
    womens_dropdown.style.visibility = 'hidden';
    accessories_dropdown.style.visibility = 'hidden';
}

function menHidden(){
    mens_dropdown.style.visibility = 'hidden';
}

function womenVisible() {
    womens_dropdown.style.visibility = 'visible';
    mens_dropdown.style.visibility = 'hidden';
    accessories_dropdown.style.visibility = 'hidden';
}

function womenHidden(){
    womens_dropdown.style.visibility = 'hidden';
}

function accessoriesVisible() {
    accessories_dropdown.style.visibility = 'visible';
    womens_dropdown.style.visibility = 'hidden';
    mens_dropdown.style.visibility = 'hidden';
}

function accessoriesHidden(){
    accessories_dropdown.style.visibility = 'hidden';
}