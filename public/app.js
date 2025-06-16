gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"), // should have data-scroll-container
    smooth: true,
    smartphone: {
        smooth: true,
    },
    tablet: {
        smooth: true,
    },
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            locoScroll.scrollTo(target);
        }
    });
});

// Sync Locomotive with ScrollTrigger
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

var skill = document.querySelectorAll(".skill");
// Animate each span from grey to white on scroll
gsap.utils.toArray(".text span").forEach((span) => {
    gsap.to(span, {
        color: "#C27E4F",
        scrollTrigger: {
            trigger: span,
            scroller: ".main",
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
            stagger: 0.5
        }
    }, 'ff');
    gsap.to(skill, {
        color: "#ff330a",
        scrollTrigger: {
            trigger: span,
            scroller: ".main",
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
            stagger: 0.5
        }
    }, 'ff');
});
var elem = document.querySelector("#elm-container")
var fix = document.querySelector("#fix-img");
var elems = document.querySelectorAll(".elem");

// elem.addEventListener("mouseenter", () => {
//     fix.style.display = "block"
// })
// elem.addEventListener("mouseleave", () => {
//     fix.style.display = "none"
// })
// elems.forEach(function (e) {
//     e.addEventListener("mouseenter", () => {
//         var img = e.getAttribute("data-img")
//         fix.style.backgroundImage = `url(${img})`
//     })
// })
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: "auto",
//     centeredSlides: true,
//     spaceBetween: 30,
// });
// var flag = 0
// var scr = document.querySelector(".menu")
// var menuS = document.querySelector(".na3");
// var nimg = document.querySelector(".navimg");

// menuS.addEventListener("click", () => {
//     scr.style.top = "0";
//     nimg.style.opacity = "0";
//     menuS.style.zIndex = "100"
// });
// scr.addEventListener("click", () => {
//     scr.style.top = "-120%";
//     nimg.style.opacity = "1";
// });


// var load = document.querySelector(".loadr")
// setTimeout(()=>{
//     gsap.to(load,{
//         y:"-120%",
//         duration:0.5,
//         ease: Expo.easeOut,
//         onStart: load()
//     })
// },3000)

document.querySelectorAll(".elem").forEach(function (elm) {
    var rotate = 0;
    var value = 0;

    elm.addEventListener("mousemove", function (dets) {
        // console.log(dets.clientX, dets.clientY);
        var diff = dets.clientY - elm.getBoundingClientRect().top;

        value = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elm.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, value * 0.5)
        });
        gsap.to(elm.querySelector("h2"), {
            opacity: 0.2,
            x: "38"
        });
        gsap.to(elm.querySelector("h6"), {
            opacity: 0.2
        });
        // gsap.to(".cursor",{
        //     scale:6,
        // });
    });
    elm.addEventListener("mouseleave", function (dets) {
        // console.log(dets.clientX, dets.clientY);
        var diff = dets.clientY - elm.getBoundingClientRect().top;

        value = dets.clientX - rotate;
        rotate = dets.clientX;


        gsap.to(elm.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
        gsap.to(elm.querySelector("h2"), {
            opacity: 1,
            x: "0",
        });
        gsap.to(elm.querySelector("h5"), {
            opacity: 1
        });
        // gsap.to(".cursor",{
        //     scale:1
        // })
    });
});

window.addEventListener("mousemove", function (dets) {
    // console.log(dets.clientX, dets.clientY);
    document.querySelector(".cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
})


var tl = gsap.timeline();

function load() {
    var a = 0
    setInterval(function () {
        a = a + Math.floor(Math.random() * 19)
        // console.log(a)
        if (a < 100) {
            document.querySelector(".loadr span").innerHTML = a + `%`
        } else {
            a = 100
            document.querySelector(".loadr span").innerHTML = a + `%`
        }

    }, 155)
}
tl.from(".loadr video", {
    delay: 0.5,
    scale: 3,
    duration: 1.9,
})
tl.to(".loadr video", {
    delay: 0.1,
    y: -40
}, 'j')
tl.to(".loadr h1", {
    delay: 0.3,
    display: `block`,

}, 'j')
tl.to(".loadr", {
    top: "-200vh",
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
})

tl.from(".page1 .nav", {
    y: 30,
    opacity: 0,
    duration: 1.5,
    delay: -0.7,
    ease: Expo.easeInOut
}, 'gg')
tl.from(".page1 h1", {
      y: 50,
    opacity: 0,
    duration: 1.5,
    delay: -0.8,
    ease: Expo.easeInOut
}, 'gg')
tl.from(".page1 .info", {
      y: 30,
    opacity: 0,
    duration: 1.5,
    delay: -0.7,
    ease: Expo.easeInOut
}, 'gg')
tl.from(".page1 .h", {
    opacity: 0,
    scale: 2,
    y: 40, ease: "power2.in", delay: -0.5, duration: 0.8
}, 'h')
tl.from(".page2 .img", {
      y: 30,
    opacity: 0,
    duration: 1.5,
    delay: -0.8,
    ease: Expo.easeInOut
}, 'h')
document.querySelector(".menu").addEventListener('mouseenter', () => {
    gsap.to(".menu", {
        rotate: '45deg'
    })
})
document.querySelector(".menu").addEventListener('mouseleave', () => {
    gsap.to(".menu", {
        rotate: '0deg'
    })
})
document.querySelectorAll(".page5 .proj").forEach(proj => {
    proj.addEventListener("mouseenter", () => {
        gsap.to(".cursor", {
            width: 100,
            height: 100,
            duration: 0.3,
            ease: "power2.out"
        });
        document.querySelector(".cursor").innerHTML = "View Project";
        document.querySelector(".cursor").addEventListener("click", function () {
            window.location.href = 'www.google.com';
        });
    });

    proj.addEventListener("mouseleave", () => {
        gsap.to(".cursor", {
            width: 20,
            height: 20,
            duration: 0.3,
            ease: "power2.out"
        });
        document.querySelector(".cursor").innerHTML = "";
    });
    proj.addEventListener("click", () => {
        const link = proj.getAttribute("data-link");
        window.open(link, "_blank");
    });

});
gsap.to(".vdeo video", {
    width: "80%",
    y: -80,
    scrollTrigger: {
        trigger: ".vdeo",
        scroller: ".main", // optional: use only if you're using a custom scroll container
        start: "top 90%",
        end: "top 60%",
        scrub: true, // important for scroll-based animation
     
    }
});



// Hamburger icon click → open menu
// Open menu with GSAP
document.querySelector(".menu").addEventListener("click", () => {
    gsap.to(".menuS", {
        top: 0,
        duration: 0.9,
        ease: "power2.out"
    });
});

// Close menu with 'X' icon
document.querySelector(".menuS .ri-close-large-line").addEventListener("click", () => {
    gsap.to(".menuS", {
        top: "-150%",
        duration: 0.9,
        ease: "power2.in"
    });
});

// Handle link click, close menu with GSAP, then scroll
document.querySelectorAll('.menuS a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            // Animate menu slide up
            gsap.to(".menuS", {
                top: "-150%",
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    locoScroll.scrollTo(target);
                }
            });
        }
    });
});

document.querySelectorAll('.lightbox-trigger').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const largeSrc = img.getAttribute('data-large') || img.src;
    
    lightboxImg.src = largeSrc;
    lightbox.style.display = 'flex';

    // Reset the lightbox image to a small scale and invisible
    gsap.set(lightboxImg, { scale: 0.8, opacity: 0 });

    // Animate with GSAP
    gsap.to(lightboxImg, {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    });
  });
});
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

lightbox.addEventListener('click', () => {
  // Animate out
  gsap.to(lightboxImg, {
    scale: 0.8,
    opacity: 0,
    duration: 0.3,
    ease: "power2.in",
    onComplete: () => {
      lightbox.style.display = 'none';
    }
  });
});


  // Close lightbox when clicking anywhere
  document.getElementById('lightbox').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
  });



document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});

