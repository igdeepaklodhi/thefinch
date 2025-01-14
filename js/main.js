gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main-container"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("main-container", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("#main-container").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

var tl = gsap.timeline()
gsap.to(".query .btn-loop", {
    x: "-200%",              
    duration: 10,             
    repeat: -1,             
    ease: "linear",          
            
  });


 
  tl.to(".design1-img", 
    {
        rotation: "+=360", 
        duration: 30,
        repeat: -1, 
        ease: "linear",
        
       
    }
  );



var ts = gsap.timeline({ repeat: -1, repeatDelay: 0 });


ts.to(".logo-icon", {
  rotation: 90,
  duration: 2
})
.to(".logo-icon", {
  rotation: 180,
  duration: 2
})
.to(".logo-icon", {
  rotation: 270,
  duration: 2
})
.to(".logo-icon", {
  rotation: 360,
  duration: 2
});

gsap.registerPlugin(ScrollTrigger);

// Select the arrow line and arrowhead
const arrowLine = document.querySelector(".about-arrow-line");
const arrowHead = document.querySelector(".about-arrow-angle");

// Get the total length of the path
const lineLength = arrowLine.getTotalLength();

// Set initial stroke-dasharray and stroke-dashoffset values for the line
arrowLine.style.strokeDasharray = lineLength;
arrowLine.style.strokeDashoffset = lineLength;

// GSAP animation for the line
gsap.to(arrowLine, {
  strokeDashoffset: 0, // Animate to reveal the line
  duration: 3, // Animation duration
  scrollTrigger: {
    trigger: ".about-arrow-line",
    scroller:"#main-container", // Element to trigger the animation
    start: "top 30%", // Start when the SVG enters the viewport
    end: "top 0%", 
    scrub: true,
    markers:true
    
  },
});

// GSAP animation for the arrowhead (fade in)
gsap.fromTo(
  arrowHead,
  { opacity: 0, scale: 0.5 }, // Start with transparency and smaller size
  {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".about-arrow-angle",
      scroller:"#main-container",
      start: "top 20%", // Arrowhead appears after the line is mostly drawn
      end: "top 0%",
      scrub: true,
      
    },
  }
);


// locomative


