const brush = document.querySelector('.img-container');
const paint = document.querySelector('.red-paint');

const gallery = document.querySelector('.gallery-intro');

const serv = document.querySelector('.serv-section-intro');
const team = document.querySelector('.intro-wrap');

const noe = document.querySelector('.noe-section');
const filipe = document.querySelector('.filipe-section');
const ricardo = document.querySelector('.ricardo-section');


const tl = new TimelineMax ();

tl.fromTo(brush, 2, {top: "0px"}, {top:"500px"},)
.fromTo(paint, 2, {height: "0px"}, {height:"600px"}, "-=2");

var controllerdois = new ScrollMagic.Controller();
var tldois = new TimelineMax();

tldois.fromTo(brush, 2, {top: "500px"}, {top:"1000px"},)
.fromTo(paint, 2, {height: "600px"}, {height:"1200px"}, "-=2");

var scene = new ScrollMagic.Scene({
    triggerElement: "#trigone",
    triggerHook: 0
  })
    .addIndicators({
      colorTrigger: "white",
      colorStart: "white",
      colorEnd: "white",
      indent: 5
    })
    .setTween(tldois)
    .addTo(controllerdois);

//animação áreas
var controllertres = new ScrollMagic.Controller();
var tltres = new TimelineMax();

tltres.fromTo(gallery, 1, {opacity: "0"}, {opacity: "1"})
.fromTo(gallery, 1, {top:"100px"}, {top:"0px"}, "-=1.5");

var scenetres = new ScrollMagic.Scene({
    triggerElement: ".zone",
    triggerHook: 0
  })
    .addIndicators({
      colorTrigger: "lime",
      colorStart: "lime",
      colorEnd: "lime",
      indent: 5
    })
    .setTween(tltres)
    .addTo(controllertres);

//animação áreas
var controllerfour = new ScrollMagic.Controller();
var tlfour = new TimelineMax();

tlfour.fromTo(serv, 1, {opacity: "0"}, {opacity: "1"})
.fromTo(serv, 1, {top:"100px"}, {top:"0px"}, "-=1.5");

var scenefour = new ScrollMagic.Scene({
    triggerElement: ".anchorg",
    triggerHook: 0
  })
    .addIndicators({
      colorTrigger: "pink",
      colorStart: "pink",
      colorEnd: "pink",
      indent: 8
    })
    .setTween(tlfour)
    .addTo(controllerfour);

    //animação áreas
var controllerfive = new ScrollMagic.Controller();
var tlfive = new TimelineMax();

tlfive.fromTo(team, 1, {opacity: "0"}, {opacity: "1"})
.fromTo(team, 1, {top:"100px"}, {top:"0px"}, "-=1.5");

var scenefive = new ScrollMagic.Scene({
    triggerElement: ".imgs",
    triggerHook: 0
  })
    .addIndicators({
      colorTrigger: "blue",
      colorStart: "blue",
      colorEnd: "blue",
      indent: 12
    })
    .setTween(tlfive)
    .addTo(controllerfive);

        //animação áreas
var controllersix = new ScrollMagic.Controller();
var tlsix = new TimelineMax();

tlsix.fromTo(noe, 1, {opacity: "0"}, {opacity: "1"})
.fromTo(noe, 1, {top:"200px"}, {top:"0px"}, "-=1.5")
.fromTo(filipe, 1, {opacity: "0"}, {opacity: "1"},)
.fromTo(filipe, 1, {top:"200px"}, {top:"0px"}, "-=1.5")
.fromTo(ricardo, 1, {opacity: "0"}, {opacity: "1"},)
.fromTo(ricardo, 1, {top:"200px"}, {top:"0px"}, "-=1.5")
;

var scenesix = new ScrollMagic.Scene({
    triggerElement: ".intro-wrap",
    triggerHook: 0
  })
    .addIndicators({
      colorTrigger: "blue",
      colorStart: "blue",
      colorEnd: "blue",
      indent: 12
    })
    .setTween(tlsix)
    .addTo(controllersix);

    scene.removeIndicators();
    scenetres.removeIndicators();
    scenefour.removeIndicators();
    scenefive.removeIndicators();
    scenesix.removeIndicators();