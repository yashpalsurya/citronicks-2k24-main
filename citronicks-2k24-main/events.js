const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var yash = gsap.timeline()


yash.from("#imgg img ",{
    y:-80,
    opacity:0,
    duration:0.3,
    delay:0.5,
    stagger:0.3
})
yash.from("#nav h1 ",{
    y:-80,
    opacity:0,
    duration:0.3,
    delay:0.5,
    stagger:0.3
})
yash.from("#nav a ",{
    y:-80,
    opacity:0,
    duration:0.3,
    delay:0.5,
    stagger:0.3
})
yash.from("#new img",{
    scale:2,
    opacity:0,
    duration:0.3,
})
