import navbar from './navbar.js';
console.log(navbar)

let navbar_div = document.getElementById("navbar-container");

navbar_div.innerHTML = navbar();

