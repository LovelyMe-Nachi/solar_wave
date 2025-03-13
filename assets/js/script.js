// responsive header
const headerMenuBtn = document.querySelector("header .show_menu");
const closeMenuBtn = document.querySelector(".close_small_screen_nav");
const smallScreenNav = document.querySelector(".small_screen_nav");

headerMenuBtn.addEventListener("click", () => {
    smallScreenNav.style.left = "0";
});

closeMenuBtn.addEventListener("click", () => {
    smallScreenNav.style.left = "-1000px";
});


// header scroll event
window.addEventListener('scroll', (event)=>{
    const height = window.scrollY;
    const header = document.querySelector("header");

    if (height > 500){
        header.style.position = "fixed";
        header.style.top = '0';
        header.style.zIndex = "999";
    } else {
        header.style.position = "relative";
    }
});


// hero slides
const hero_slides = document.querySelectorAll(".hero_slide");
const hero_pagination_dots = document.querySelectorAll(".hero_pagination_dots span");
let currentSlide = 0;
const totalSlides = hero_slides.length;
let interval;

function showSlide(index) {
    hero_slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
    hero_pagination_dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function autoSlide() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
}

hero_pagination_dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
        clearInterval(interval); 
        showSlide(index);
        autoSlide();
    });
});

showSlide(currentSlide);
autoSlide();