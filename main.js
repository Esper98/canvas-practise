var canvas = document.querySelector('canvas');
console.log(canvas);

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');

function randomColor(){
    var color = ['red', 'blue', 'yellow', 'black', 'grey', 'green', 'orange']; 
    var strokeStyle = color[Math.floor(Math.random() * color.length)]; 
    return strokeStyle;
}


//random circles
for (let i = 0; i < 1; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x,y,20,0,10,false);

    c.strokeStyle = randomColor();

    c.stroke();
}

function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,10,false);
        c.strokeStyle = "blue";
        c.stroke();
        c.fill();
    }

    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}
var circles = [];

for (let i = 0; i < 500; i++) {
    var radius = 40;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() -0.5) * 10;
    var dy = (Math.random() -0.5) * 10;
    circles.push(new Circle(x,y,dx,dy,radius));
}

function animate(){
    c.clearRect(0,0,innerWidth,innerHeight);
    circles.forEach(Circle => {
        Circle.update();
    });
    requestAnimationFrame(animate);
}

animate();

// function drawStrokes(){
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.moveTo(x,y);

//     for (let i = 0; i < 10; i++) {
//         x = Math.random() * window.innerWidth;
//         y = Math.random() * window.innerHeight;
    
    
//         c.lineTo(x,y);
//     }
    
//     c.strokeStyle = randomColor();
//     c.stroke();
//     //random strokes
// }

