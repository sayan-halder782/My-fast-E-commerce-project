// js for toggle menu

var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px"
    }
}

 // Get arrow element
 const arrow = document.querySelector('.arrow');

 // Add event listener to arrow
 arrow.addEventListener('click', () => {
   // Scroll to top of page
   window.scrollTo({ top: 0, behavior: 'smooth' });
 });

// acount 

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("indicator");

function register() {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}

function login() {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}
// swiper js 

// const swiper = new Swiper('.swiper', {
//     loop: true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//     },
//   });


