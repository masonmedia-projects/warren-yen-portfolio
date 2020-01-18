import 'bootstrap';
import Swup from 'swup';
import AOS from 'aos';
import smoothscroll from 'smoothscroll-polyfill';
import './styles.scss';

// swup
const swup = new Swup();

// close mobile menu on link click
const navAttribute = () => {
    let nav = document.querySelectorAll(".nav-item");
    let i;
    for (i = 0; i < nav.length; i++) {
        nav[i].setAttribute("data-toggle", "collapse");
        nav[i].setAttribute("data-target", ".navbar-collapse");
    }
}

// copyright get current year
const copyright = () => {
    const d = new Date();
    document.querySelector("#copyright").innerHTML = "&copy; Warren Yen " + d.getFullYear();
}

// AOS scroll animation
const aosAnimate = () => {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-out-sine',
        delay: 0
    });
}

// scroll top on route change
const scrollTopPageChange = () => {
    window.scrollTo(0, 0);
}

// scroll to top
const scrollTopButton = () => {
    let scrollBtn = document.getElementById("scrollTop");
    scrollBtn.addEventListener("click", scrollTop);
    function scrollTop() {
        document.querySelector('#swup').scrollIntoView({ behavior: 'smooth' });
    }  
};

// nav color change on scroll
const navScroll = () => {
    const myNav = document.getElementById('myNav');
    window.scrollY >= 70
    window.onscroll = function () { 
        if (window.scrollY >= 70) {
            myNav.classList.add("bg-white");
        } 
        else {
            myNav.classList.remove("bg-white");
        }
    }
};

// init all functions
navAttribute();
scrollTopPageChange();
copyright();
aosAnimate();
scrollTopButton();
smoothscroll.polyfill();
navScroll();

// js reload on page change
swup.on('contentReplaced', () => {
    navAttribute();
    scrollTopPageChange();
    navScroll();
    copyright();
    aosAnimate();
    scrollTopButton();
    smoothscroll.polyfill();
});

