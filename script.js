const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

function videoAnimation(){
    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play")
    videocon.addEventListener("mouseenter", function(){
        gsap.to(playbtn,{
            scale: 1,
            opacity: 1
        })
    })
    videocon.addEventListener("mouseleave", function(){
        gsap.to(playbtn,{
            scale:0,
            opacity:0
        })
    })
    videocon.addEventListener("mousemove", function(dets){
        gsap.to(playbtn,{
            left: dets.x-70,
            top:dets.y-50
        })
    })
}
videoAnimation()

function textAnimate(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.3,
        duration:0.9,
        stagger:0.4
       })
       gsap.from("#page1 #video-container",{
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.5,
        
       })
}
textAnimate()

const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

function navAnimation(val1, val2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
  });
}

function toggleNav() {
  hamburgerMenu.classList.toggle("active");
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    navAnimation("out", "in");
  } else {
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    navAnimation("in", "out");
  }
}

hamburgerMenu.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
