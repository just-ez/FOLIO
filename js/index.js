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

// animate expand to follow cursor
w_box.forEach( e => {
    console.log(e);
    e.addEventListener( "click", e => {
        console.log({e});
     })
})