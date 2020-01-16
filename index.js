import 'bootstrap';
import Swup from 'swup';
import SwupOverlayTheme from '@swup/overlay-theme';
import AOS from 'aos';
import smoothscroll from 'smoothscroll-polyfill';
import './styles.scss';

// swup
const swup = new Swup({
    // animateHistoryBrowsing: true,
    plugins: [new SwupOverlayTheme({
        color: '#F5F5F5'
        // color: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);'
    })]
});

const navAnimate = () => {
    let x = document.querySelectorAll(".nav-item");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.add("animated", "zoomIn");
        x[0].classList.add("delay-01");
        x[1].classList.add("delay-03");
        x[2].classList.add("delay-06");
        x[3].classList.add("delay-09");
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

// animations

// init all functions
navAnimate();
scrollTopPageChange();
copyright();
aosAnimate();
scrollTopButton();
smoothscroll.polyfill();
navScroll();

// js reload on view change
swup.on('contentReplaced', () => {
    navAnimate();
    scrollTopPageChange();
    navScroll();
    copyright();
    aosAnimate();
    scrollTopButton();
    smoothscroll.polyfill();
});
