// const blob = document.querySelector('.blob')
// // animate blob to follow cursor
// document.body.onpointermove = e => {
//    const interactable = e.target.closest('.interactable'),
//          interacting = interactable !== null
//    const {clientX, clientY} = e

//    blob.animate({
//     left: `${clientX}px`,
//     top: `${clientY}px`,
//     scale: `${interacting ? 8:1}`
//    }, {duration: 3000, fill: "forwards"}) 
  
   
 
// }



gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
   // duration: 1
})

timeline.from('.nav-p', {
    opacity: 0,
    duration: .5,
    y: '-100%',
    ease: 'power4.In'
})
timeline.from('.hero_txt_1', {
   opacity: 0,
   y: '100%',
   ease: 'power1.Out',
   duration: .2
})
timeline.from('.side_line', {
   duration: .6,
   width: '0%',
   ease: 'power4.In',
   stagger: .1
})
timeline.from('.slide-up', {
   opacity: 0,
   y: '50%',
   duration: .15,
   ease: 'power4.In',
})

// gsap.from('.about', {
//    opacity: 0,
//    duration: .1,
//    x: '-100%',
//    ease: 'power4.In',
//    scrollTrigger: '.about',
//    stagger: .1
// })


// increase line height
gsap.from('.line_right', {
   duration: 1,
   width: '0%',
   ease: 'power4.In',
   scrollTrigger: '.line_right',
   stagger: .5
})

const width = screen.width
console.log(width);

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
  }
});

// increase line height
gsap.from('.line_right', {
   duration: 1,
   height: '0%',
   ease: 'power4.In',
   scrollTrigger: '.line_right',
   stagger: .1
})

}