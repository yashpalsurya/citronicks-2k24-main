const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var yash = gsap.timeline()


yash.from("#imgg img ",{
    y:-80,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3
})
yash.from("#nav h1 ",{
    y:-80,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3
})
yash.from("#nav a ",{
    y:-80,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3
})
yash.from(".left-side img",{
    scale:2,
    opacity:0,
    duration:1
})
yash.from(".right-side h1",{
    y:-80,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3
})

yash.from(".right-side p",{
    x:-80,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3
})
