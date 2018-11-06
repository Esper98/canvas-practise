var canvas = document.querySelector('canvas');
console.log(canvas);

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');


c.fillRect(10,10,50,50);
c.fillRect(10,70,50,50);
c.fillRect(70,10,50,50);
c.fillRect(70,70,50,50);