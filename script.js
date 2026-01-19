let time_line = gsap.timeline();
let open = document.querySelector(".open");
let close = document.querySelector(".close");
let mouse_container = document.querySelector(".testimonials");
let mouse = document.querySelector(".cursor");

time_line.to(".nav__list", {
  transform: "translateX(0)",
  duration: 0.4,
});

time_line.pause();

open.addEventListener("click", function () {
  time_line.play();
});
close.addEventListener("click", function () {
  time_line.reverse();
});

gsap.from(".scale", {
  scale: 0,
  duration: 0.5,
  opacity: 0.5,
  y: 50,
});

gsap.from("nav", {
  y: -100,
  duration: 0.5,
  opacity: 0,
});

gsap.from(".opacity", {
  opacity: 0,
  duration: 1.5,
});

gsap.utils.toArray(".scale_up").forEach((el) => {
  gsap.from(el, {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: el,
      start: "top 95%",
      end: "top 80%",
      scrub: 2,
    },
  });
});

gsap.utils.toArray(".left").forEach((el) => {
  gsap.from(el, {
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: el,
      start: "top 95%",
      end: "top 80%",
      scrub: 2,
    },
  });
});

gsap.utils.toArray(".right").forEach((el) => {
  gsap.from(el, {
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: el,
      start: "top 95%",
      end: "top 80%",
      scrub: 2,
    },
  });
});

gsap.from(".foot_logo", {
  y: 7,
  repeat: -1,
  yoyo: true,
  duration: 1,
});