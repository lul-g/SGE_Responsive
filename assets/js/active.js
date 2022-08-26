const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const header_logo = document.querySelector(".header-logo-w");
const secondary_header = document.querySelector(".secondary-header");
const nav_txts = document.querySelectorAll('.nav-txt');
const nav_contact_us = document.querySelectorAll('header nav .btn');
// const blog = document.querySelector('header nav .btn-0');


const not_headers = document.querySelectorAll('.not-header');
const nav_toggle = document.querySelector(".toggle-nav");
const nav_toggle_i = nav_toggle.getElementsByTagName("i")[0];
const plane = document.querySelector(".plane");

// nav toggle outside of header click
not_headers.forEach((not_header) => {
    not_header.addEventListener('click', () => {
        const is_visible = nav.getAttribute("data-visible");    
        if(is_visible === "true") {
            nav.setAttribute("data-visible", false);
            nav_toggle.setAttribute("data-x", false);
            nav_toggle_i.classList.add("fa-bars");
            nav_toggle_i.classList.remove("fa-x");
            nav_toggle.style.position = "absolute";
            plane.style.position = "absolute";
        }
 
    })
});

// nav toggle button click
nav_toggle.addEventListener('click', () => {
    const is_visible = nav.getAttribute("data-visible");    
    //if nav not visible
    if(is_visible === "false" || nav_toggle.style.position === "absolute") {
        nav.setAttribute("data-visible", true);
        nav_toggle.setAttribute("data-x", true);
        nav_toggle_i.classList.remove("fa-bars");
        nav_toggle_i.classList.add("fa-x");
        nav_toggle.style.position = "fixed";
        plane.style.position = "fixed";
    }
    else {
        nav.setAttribute("data-visible", false);
        nav_toggle.setAttribute("data-x", false);
        nav_toggle_i.classList.add("fa-bars");
        nav_toggle_i.classList.remove("fa-x");
        nav_toggle.style.position = "absolute";
        plane.style.position = "absolute";
    }
});


// hide nav on scroll down, show on scroll up
var lastTopScroll = 0; 
window.addEventListener("scroll", () => {
    const is_visible = nav.getAttribute("data-visible");    
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastTopScroll && scrollTop > 50) {
        header.style.top = '-15vh';
        header.style.background="white";
        nav_toggle.style.color="black";
        plane.style.color="black";
        header_logo.src = "assets/img/logo/logo.png";
        nav_txts.forEach((nav_txt) => {nav_txt.style.color = 'black'});
        nav.style.background = 'white';
        nav_contact_us[0].style.borderColor = 'white';
        nav_contact_us[1].style.borderColor = 'white';


    }
    else if (scrollTop === 0) {
        header.style.background="transparent";
        nav_toggle.style.color="white";
        plane.style.color="white";
        header_logo.src = "assets/img/logo/logo-white.png";
        nav_txts.forEach((nav_txt) => {nav_txt.style.color = 'white'});
        nav.style.background = '#06052f';
        nav_contact_us[0].style.borderColor = 'white';
        nav_contact_us[1].style.borderColor = 'white';

    }
    else {
        header.style.top = '0';
     
    }
    lastTopScroll = scrollTop;
});


//secondary header is white - change each style on scrolltop
//primary is transparent
