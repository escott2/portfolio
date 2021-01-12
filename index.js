const navToggleBtn = document.querySelector(".js-nav-toggle");
const nav = document.querySelector(".js-nav");
const navItems = document.querySelectorAll(".js-nav__item");
const flowerHeader = document.querySelector(".js-generate-flowers--header");
const flowerSection = document.querySelectorAll(".js-generate-flowers--section");
const scrollToTopBtn = document.querySelector(".js-scroll-to-top");

// EVENT LISTENERS ****************************

//Generate flower-leaf embelishment onload.
window.addEventListener('load', () => {
    generateFlowers(20, flowerHeader);

    for (let i = 0; i < flowerSection.length; i++) {
        generateFlowers(2, flowerSection[i]);
        
        //Animation styles for flower-wrapper dividers
        flowerSection[i].style.opacity="1";
        flowerSection[i].style.transform = "rotate(0deg)";
    }

    //Animation styles for flower-wrapper header
    flowerHeader.style.opacity="1";
    flowerHeader.style.transform = "rotate(0deg)";
 
});

//Toggle nav item view with hambuger menu. Screen sizes below 600px
navToggleBtn.addEventListener("click", () => {
    if (nav.classList.contains("nav__display-flex")) {
        nav.classList.remove("nav__display-flex");
        nav.classList.add("nav__display-none");
    } else {
        nav.classList.remove("nav__display-none");
        nav.classList.add("nav__display-flex");
    }
});

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        scrollToTopBtn.classList.add("scroll-appear");
    } else {
        scrollToTopBtn.classList.remove("scroll-appear");
    }
    
});


scrollToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

//When nav item clicked, nav disappears
navItems.forEach(item => item.addEventListener("click", () => {
    if (window.innerWidth < 600) {
        nav.classList.remove("nav__display-flex");
        nav.classList.add("nav__display-none");
    }
}));

// FUNCTIONS **********************************

function generateFlowers(number, location) {
    const darkFlower = document.createElement("img");
    const lightFlower = document.createElement("img");
    const leaf = document.createElement("img");

    darkFlower.src = "img/darkFlower.svg";
    lightFlower.src = "img/lightFlower.svg";
    leaf.src = "img/leaf.svg";

    darkFlower.className = "flower-svg";
    lightFlower.className = "flower-svg";
    leaf.className = "leaf-svg";

    //Loops create flower embellishment pattern
    for (let i = 0; i < number; i++) {
        const cloneDarkFlower = darkFlower.cloneNode(true);
        location.appendChild(cloneDarkFlower);
        for (let y = 0; y < 1; y++) {
            const cloneLeaf = leaf.cloneNode(true);
            const cloneLightFlower = lightFlower.cloneNode(true);
            location.appendChild(cloneLeaf);
            location.appendChild(cloneLightFlower);
        }
    }
}
