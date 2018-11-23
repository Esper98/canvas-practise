var canvas = document.querySelector('canvas');
console.log(canvas);

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse.x);
});

window.addEventListener('resize', function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
    init()
});


var circles = [];

function init() {
    circles = [];
    for (let i = 0; i < 500; i++) {
        var radius = Math.random() * 5 + 5 ;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() -0.5) * 4;
        var dy = (Math.random() -0.5) * 4;
        circles.push(new Circle(x,y,dx,dy,radius));
    }
}

function randomColor(){
    var color = ['#112F41', '#068587', '#4FB99F', '#F2B134', '#ED553B']; 
    var strokeStyle = color[Math.floor(Math.random() * color.length)]; 
    return strokeStyle;
}

//random circles


function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = randomColor();

    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,10,false);
        c.fillStyle = this.color;
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
        
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50){
            if(this.radius < 70){
                this.radius+= 2;
            }
        }
        else if(this.radius > this.minRadius){
            this.radius -= 1;
        }

        this.draw();
    }
}


function animate(){
    c.clearRect(0,0,innerWidth,innerHeight);
    circles.forEach(Circle => {
        Circle.update();
    });
    requestAnimationFrame(animate);
}

animate();
init();
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
var canvas = document.querySelector("canvas");
var x;
var y;
