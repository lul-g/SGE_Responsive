const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const header_logo = document.querySelector(".header-logo-w");
const secondary_header = document.querySelector(".secondary-header");
const nav_txts = document.querySelectorAll('.nav-txt');
const nav_contact_us = document.querySelectorAll('header nav .btn');
const home = document.querySelector('.hme');
const blog = document.querySelector('header nav .btn-0');
const to_top_btn = document.querySelector('.to-top-btn');


const not_headers = document.querySelectorAll('.not-header');
const nav_toggle = document.querySelector(".toggle-nav");
const nav_toggle_i = nav_toggle.getElementsByTagName("i")[0];
const plane = document.querySelector(".plane");
const blog_icon = document.querySelector(".blog");


//remove header 
function remove_header() {  
    header.style.top = "-15vh";  
}
// remove/add nav
function remove_nav() {
            nav.setAttribute("data-visible", false);
            // nav.style.background = 'transparent';
            nav_toggle.setAttribute("data-x", false);
            nav_toggle_i.classList.add("fa-bars");
            nav_toggle_i.classList.remove("fa-x");
            nav_toggle.style.position = "absolute";
            plane.style.position = "absolute";
            blog_icon.style.position = "absolute";

}
function add_nav() {
        // nav.style.background = 'black';
        nav.setAttribute("data-visible", true);
        nav_toggle.setAttribute("data-x", true);
        nav_toggle_i.classList.remove("fa-bars");
        nav_toggle_i.classList.add("fa-x");
        nav_toggle.style.position = "fixed";
        plane.style.position = "fixed";
        blog_icon.style.position = "fixed";
}
const goToTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth"
    });
  };
to_top_btn.addEventListener("click", goToTop)
home.addEventListener("click", goToTop)
// nav toggle outside of header click
not_headers.forEach((not_header) => {
    not_header.addEventListener('click', () => {
        const is_visible = nav.getAttribute("data-visible");    
        if(is_visible === "true" || header.style.top === '0px' && header.style.background !== 'transparent') {
            remove_nav();
            header.style.top = '-15vh';
        }
 
    })
});
// nav toggle button click
nav_toggle.addEventListener('click', () => {
    const is_visible = nav.getAttribute("data-visible");    
    //if nav not visible
    if(is_visible === "false" || nav_toggle.style.position === "absolute") {
        add_nav();
    }
    else {
        remove_nav();
    }
});

//scroll header-nav behavior
var lastTopScroll = 0; 

window.addEventListener("scroll", () => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastTopScroll && scrollTop > 50) {
        to_top_btn.style.right = '5vh';
        header.style.top = '-15vh';
        header.style.background="white";
        nav_toggle.style.color="black";
        plane.style.color="black";
        blog_icon.style.color="black";
        header_logo.src = "/assets/img/logo/logo.png";
        nav_txts.forEach((nav_txt) => {nav_txt.style.color = 'black'});
        nav.style.background = 'white';
        nav_contact_us[0].style.borderColor = '#290452';
        nav_contact_us[1].style.borderColor = '#290452';
    }
    else if (scrollTop === 0) {
        header.style.background="transparent";
        nav_toggle.style.color="white";
        plane.style.color="white";
        blog_icon.style.color="white";
        header_logo.src = "/assets/img/logo/logo-white.png";
        nav_txts.forEach((nav_txt) => {nav_txt.style.color = 'white'});
        nav.style.background = '#06052f';
        nav_contact_us[0].style.borderColor = 'white';
        nav_contact_us[1].style.borderColor = 'white';
        to_top_btn.style.right = '-10vh';
    }
    else {
        header.style.top = '0';
        const is_visible = nav.getAttribute("data-visible");    
    //clear header when scroll has stopped

        // if(hovering_on_nav === "false") {
        //     window.clearTimeout(timer);
        //     timer = setTimeout(function() {
        //     console.log( 'Scrolling has stopped.' );  
        //     header.style.top = "-15vh";  
        // }, 1000);
        // }
    }
    lastTopScroll = scrollTop;
}, false);

// nav link click remove navbar 
nav_txts.forEach((nav_txt) => {
    nav_txt.addEventListener("click", ()=> {
        setTimeout(() => {remove_nav()}, 200);
    });
});

//on click of these buttons hide nav
to_top_btn.addEventListener('click', () => {
    setTimeout(() => {remove_nav()}, 200);
});
plane.addEventListener('click', () => {
    setTimeout(() => {remove_nav()}, 200);
});
blog_icon.addEventListener('click', () => {
    setTimeout(() => {remove_nav()}, 200);
});

