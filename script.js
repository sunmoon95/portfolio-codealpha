// ===============================
// Shunmathi Portfolio
// script.js
// ===============================

// ----------------------------
// Smooth Scroll for Navigation
// ----------------------------

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({

            behavior:'smooth'

        });

    });

});

// ----------------------------
// Navbar Background on Scroll
// ----------------------------

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        nav.style.background="rgba(15,23,42,.9)";
        nav.style.boxShadow="0 5px 20px rgba(0,0,0,.3)";

    }

    else{

        nav.style.background="rgba(255,255,255,.05)";
        nav.style.boxShadow="none";

    }

});

// ----------------------------
// Typing Animation
// ----------------------------

const text="Frontend Developer";

const typingElement=document.querySelector(".hero-text h2");

let index=0;

function typeText(){

    if(index<text.length){

        typingElement.textContent+=text.charAt(index);

        index++;

        setTimeout(typeText,100);

    }

}

typingElement.textContent="";

typeText();

// ----------------------------
// Scroll Reveal
// ----------------------------

const sections=document.querySelectorAll("section");

function reveal(){

    sections.forEach(section=>{

        const top=section.getBoundingClientRect().top;

        const screen=window.innerHeight;

        if(top<screen-100){

            section.style.opacity="1";

            section.style.transform="translateY(0px)";

        }

    });

}

sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(60px)";

    section.style.transition=".8s";

});

window.addEventListener("scroll",reveal);

reveal();

// ----------------------------
// Active Navigation
// ----------------------------

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// ----------------------------
// Scroll To Top Button
// ----------------------------

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.style.position="fixed";

topBtn.style.right="30px";

topBtn.style.bottom="30px";

topBtn.style.width="55px";

topBtn.style.height="55px";

topBtn.style.borderRadius="50%";

topBtn.style.border="none";

topBtn.style.cursor="pointer";

topBtn.style.fontSize="22px";

topBtn.style.background="#38bdf8";

topBtn.style.color="#000";

topBtn.style.display="none";

topBtn.style.zIndex="999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ----------------------------
// Hero Image Animation
// ----------------------------

const image=document.querySelector(".hero-image img");

image.addEventListener("mouseenter",()=>{

    image.style.transform="scale(1.08) rotate(2deg)";

});

image.addEventListener("mouseleave",()=>{

    image.style.transform="scale(1) rotate(0deg)";

});
.active{

color:#38bdf8 !important;

font-weight:700;

}