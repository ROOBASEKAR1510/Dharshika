/*==========================================
   DHARSHIKA PORTFOLIO V6
==========================================*/

// ================= MOBILE MENU =================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        menuToggle.innerHTML = navMenu.classList.contains("active")
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });

    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");
            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });

}

// ================= HEADER EFFECT =================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,8,22,.95)";
        header.style.boxShadow = "0 15px 30px rgba(0,0,0,.30)";

    } else {

        header.style.background = "rgba(5,8,22,.75)";
        header.style.boxShadow = "none";

    }

});

// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ================= SCROLL REVEAL =================

const reveals = document.querySelectorAll(
".stat,.about-text,.info-box,.timeline-card,.skill-card,.internship-card,.project-card,.certificate-card,.interest-card,.language-card,.contact-card"
);

function reveal() {

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

reveals.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".7s ease";

});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ================= SCROLL TOP =================

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.style.display = "block";

    } else {

        scrollTopBtn.style.display = "none";

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ================= HERO IMAGE EFFECT =================

const image = document.querySelector(".image-box");

if(image){

    let scale = true;

    setInterval(()=>{

        image.style.transform = scale
            ? "scale(1.03)"
            : "scale(1)";

        scale = !scale;

    },2000);

}

// ================= CURRENT YEAR =================

const copyright = document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML =
    `© ${new Date().getFullYear()} All Rights Reserved.`;

}

console.log("✅ Portfolio Version 6 Loaded Successfully");