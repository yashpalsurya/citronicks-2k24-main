const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var yash = gsap.timeline()


yash.from("#nav img, #nav h1,#nav a",{
    y:-80,
    opacity:0,
    duration:0.3,
    delay:0.5,
    stagger:0.3
})
yash.from("#herol h1",{

    y:-80,
    opacity:0,
    duration:0.3,
    stagger:0.3

})
yash.from("#herol p",{
    x:-100,
    opacity:0,
    duration:0.3,
    stagger:0.3

})
yash.from("#herol button",{
    x:-100,
    opacity:0,
    duration:0.3,
    stagger:0.3

})
yash.from("#heror img",{
    scale:2,
    opacity:0,
    duration:0.3,
})

yash.from("#part1  img",{
    scale:2,
    opacity:0,
    duration:0.3,

})

yash.from("#part2  img",{
    scale:2,
    opacity:0,
    duration:0.3,

})
yash.from("#part3  img",{
    scale:2,
    opacity:0,
    duration:0.3,

})
yash.from("#part1 h2",{
    y:-80,
    opacity:0,
    duration:0.3,
    stagger:0.3

})
yash.from("#part1 p",{
    y:-80,
    opacity:0,
    duration:0.3,
    stagger:0.3

})
yash.from("#part2 h2",{
    y:-80,
    opacity:0,
    duration:0.3,
    stagger:0.3

})
yash.from("#part2 p",{
    y:-80,
    opacity:0,
    duration:0.3,
    stagger:0.3

})
yash.from("#part3 h2",{
    y:-80,
    opacity:0,
    duration:0.3,
    stagger:0.3

})
yash.from("#part3 p",{
    y:-80,
    opacity:0,
    duration:0.3,
    stagger:0.3

})
