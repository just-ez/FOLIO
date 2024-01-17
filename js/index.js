// $(document).scroll(function () {
//   var scroll = $(window).scrollTop();
//   if (scroll > 3500) {
//     console.log("hi", scroll);
//     $("body").addClass("scroll1");
//   }
// });

const blob = document.querySelector(".blob");
// animate blob to follow cursor
document.body.onpointermove = (e) => {
  const interactable = e.target.closest(".interactable"),
    interacting = interactable !== null;
  const { clientX, clientY } = e;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
      scale: `${interacting ? 8 : 1}`,
    },
    { duration: 3000, fill: "forwards" }
  );
};

gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
  // duration: 1
});
timeline.to(".container", {
  opacity: 0,
  duration: 7,
  ease: "power4.In",
});
// timeline.to(".stagger", {
//   opacity: 0,
//   duration: 0.7,
//   stagger: "",
//   width: "0",
//   ease: "power4.In",
// });
timeline.to(".loader", {
  height: "0vh",
  duration: 0.2,
  stagger: "",
  width: "0",
  ease: "power4.In",
});
timeline.from(".nav-p", {
  opacity: 0,
  duration: 0.7,
  y: "-100%",
  ease: "power4.In",
});
timeline.from(".hero_txt_1", {
  opacity: 0,
  y: "100%",
  ease: "power1.Out",
  duration: 0.4,
});
timeline.from(".side_line", {
  duration: 0.6,
  width: "0%",
  ease: "power4.In",
  stagger: 0.3,
});
timeline.from(".slide-up", {
  opacity: 0,
  y: "50%",
  duration: 0.3,
  ease: "power4.In",
});

gsap.from(".about", {
  opacity: 0,
  duration: 0.1,
  x: "-100%",
  ease: "power4.In",
  scrollTrigger: ".about",
  stagger: 0.1,
});

// increase line height
gsap.from(".line_right", {
  duration: 1,
  width: "0%",
  ease: "power4.In",
  scrollTrigger: ".line_right",
  stagger: 0.5,
});

const width = screen.width;

if (width > 600) {
  // horizontal scroll

  let sections = gsap.utils.toArray(".box");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: "#work",
      pin: true,
      start: "top top",
      scrub: 1,
      //  snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=4500",
    },
  });

  // increase line height
  gsap.from(".line_right", {
    duration: 1,
    height: "0%",
    ease: "power4.In",
    scrollTrigger: ".line_right",
    stagger: 0.1,
  });
}
