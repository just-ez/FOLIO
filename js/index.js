const blob = document.querySelector('.blob')
const expand = document.querySelector('.expand');
const w_box = document.querySelectorAll('w-box')
const imgC = document.querySelectorAll('.p-f-featured-images')
// animate blob to follow cursor
document.body.onpointermove = e => {
   const {clientX, clientY} = e
   blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
   }, {duration: 3000, fill: "forwards"}) 
  
 
}

// emoji animation

document.querySelector('body').addEventListener('mousemove', rotateEye)

function rotateEye  (){
   let eyes = document.querySelectorAll('.eye')
   eyes.forEach(eye => {
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2
      let radian = Math.atan2(event.pageX - x, event.pageY - y)
      let rotate = radian  * (180 / Math.PI) * -1 + 270
      console.log(rotate);
      eye.style.transform = `rotate(${rotate}deg)`
   })
}


gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
   // duration: 1
})
timeline.from('line_right', {
   duration: 1,
   with: '100%',
   ease: 'power4.In'
})
timeline.from('.nav-p', {
    opacity: 0,
    y: '-100%',
    ease: 'power4.In'
})
timeline.from('.hero_txt_1', {
   opacity: 0,
   y: '100%',
   ease: 'elastic',
   duration: 1.1
})
timeline.from('.hero_txt_2', {
   opacity: 0,
   y: '100%',
   ease: 'elastic',
   duration: 1.1
})
timeline.from('.slide-up', {
   opacity: 0,
   y: '50%',
   duration: 2,
   ease: 'power4.In',
})

gsap.from('.about', {
   opacity: 0,
   x: '-100%',
   ease: 'power4.In',
   scrollTrigger: '.about',
   stagger: .2
})

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
    end: "+=3500",
  }
});