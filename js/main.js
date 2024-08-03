// Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Services section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn"); 
const modalsCloseBtns = document.querySelectorAll(".modal-close-btn"); 

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtns, i) => {
    learnmoreBtns.addEventListener("click", () => {
        modal(i);
    });
});

modalsCloseBtns.forEach((modalsCloseBtns) => {
    modalsCloseBtns.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

// Portfolio section - Modal

// Our clients - Swiper

// Website dark/light theme

// Scroll to top button

// Navigation menu items active on page scroll

// Responsive navigation menu toggle

// Scroll reveal animations

// 
// 