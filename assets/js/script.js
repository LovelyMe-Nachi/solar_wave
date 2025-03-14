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


// core statements filter functionality
const core_statement_btn_con = document.querySelector(".core_statement_filter_btns");
const core_statement_btns = document.querySelectorAll(".core_statement_filter_btns span");

function filterStatement(statementBtn) {
    const btn_category = statementBtn.getAttribute("data-category").trim();
    const core_statements_wrapper = document.querySelector(".core_statements_wrapper");
    const core_statements = core_statements_wrapper.querySelectorAll(".core_statements");

    core_statements.forEach(core_statement => {
        if (core_statement.classList.contains(btn_category)) {
            core_statement.style.display = "block";
            core_statement.style.opacity = "1";
        } else {
            core_statement.style.display = "none";
            core_statement.style.opacity = "0";
        }
    })

    core_statement_btn_con.querySelectorAll("span").forEach(btn => btn.classList.remove("active_statement_btn"));
    statementBtn.classList.add("active_statement_btn");
}

window.addEventListener("DOMContentLoaded", () => {
    let defaultBtn = document.querySelector(".core_statement_filter_btns span.active_statement_btn");
    
    if (!defaultBtn) {
        defaultBtn = core_statement_btns[0];
        defaultBtn.classList.add("active_statement_btn");
    }

    filterStatement(defaultBtn);
})

core_statement_btns.forEach(statementBtn => {
    statementBtn.addEventListener("click", () => {
        filterStatement(statementBtn);
    })
})
