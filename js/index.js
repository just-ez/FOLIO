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


// show image marque 

// work boxes
const w_box_1 = document.getElementById('w-box-1')
const w_box_2 = document.getElementById('w-box-2')
const w_box_3 = document.getElementById('w-box-3')
const w_box_4 = document.getElementById('w-box-4')

// work image containers
const pf_1 = document.getElementById('p-f-1')
const pf_2 = document.getElementById('p-f-2')
const pf_3 = document.getElementById('p-f-3')
const pf_4 = document.getElementById('p-f-4')

