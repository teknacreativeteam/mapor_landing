const brush = document.querySelector('.img-container');
const paint = document.querySelector('.red-paint');

const tl = new TimelineMax ();

tl.fromTo(brush, 2, {top: "0px"}, {top:"500px"},)
.fromTo(paint, 2, {height: "0px"}, {height:"600px"}, "-=2");