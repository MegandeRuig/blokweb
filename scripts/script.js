// JavaScript Document


var hamburgermenu = document.querySelector(".hamburgermenu");

var drivers = document.querySelector(".drivers");

drivers.addEventListener("click", menuToggle);

function menuToggle() {

    hamburgermenu.classList.toggle('menuActive');
}