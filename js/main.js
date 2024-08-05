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
const portfolioModals = document.querySelectorAll(".portfolio-modal");
const imgCard = document.querySelectorAll(".img-card"); 
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn"); 

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCard.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtns) => {
    portfolioCloseBtns.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

// Our clients - Swiper
var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// Website dark/light theme

// Scroll to top button

// Navigation menu items active on page scroll

// Responsive navigation menu toggle

// Scroll reveal animations

// 
// 