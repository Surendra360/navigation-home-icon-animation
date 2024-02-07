var menu = document.querySelector(".nav i")
var close = document.querySelector(".for i")

var t1 = gsap.timeline();

menu.addEventListener("click", ()=>{
   t1.to(".for",{
    right:"0%"
   })
})

close.addEventListener("click", ()=>{
   t1.to(".for",{
    right:"-30%"
   })
})
menu.addEventListener("click", ()=>{
t1.from(".for h4",{
    x:200,
    opacity:0,
    stagger:0.2,
})
})

close.addEventListener("click", ()=>{
t1.reverse()
})


gsap.from(".dtl, .dtl h1, .dtl p",{
    y:30,
    delay:1,
    opacity:0,
    stagger:0.2
})
