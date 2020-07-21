const brush = document.querySelector('.img-container');
const paint = document.querySelector('.red-paint');

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


var controllertres = new ScrollMagic.Controller();
var tltres = new TimelineMax();

tltres.fromTo(brush, 2, {top: "1000px"}, {top:"1500px"},)
.fromTo(paint, 2, {height: "1200px"}, {height:"1700px"}, "-=2");

var scenetres = new ScrollMagic.Scene({
    triggerElement: ".gallery-section",
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

