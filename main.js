var canvas = document.querySelector('canvas');
var slider = document.querySelector("#slider");
var amount = document.querySelector(".amount")

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');
var hideCircles = true;
var circles = [];
var words = [];
var amountOfCircles = 500;
amount.innerHTML = "Amount of cicrcles: " + amountOfCircles;

//function is called when slider value changes
slider.addEventListener("change", function() { 
console.log("test");
  amountOfCircles = slider.value * 10; 
  amount.innerHTML = "Amount of cicrcles: " + amountOfCircles;
  init();
})

var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('resize', function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    init()
});

var toggle = document.querySelector(".toggle");
toggle.addEventListener('click', function(){
    console.log("toggle");
    hideCircles = !hideCircles;
    if(hideCircles === true){
        toggle.innerHTML = "Show outside circles"
    } else {
        toggle.innerHTML = "Hide outside circles"
    }
});


function init() {
    circles = [];
    for (let i = 0; i < amountOfCircles; i++) {
        var radius = Math.random() * 5 + 5 ;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() -0.5) * 4;
        var dy = (Math.random() -0.5) * 4;
        circles.push(new Circle(x,y,dx,dy,radius));
    }
    words = [];
    words.push(new Word(100,100,10,10,"Canvas!"));
    words.push(new Word(200,200,20,20,"2!"));

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
    this.maxRadius = Math.random() * 100 + radius;
    this.color = '#ffffff00';
    this.hoverColor = randomColor();

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
        
        if (mouse.x - this.x < 100 && mouse.x - this.x > -100
            && mouse.y - this.y < 100 && mouse.y - this.y > -100){
            this.color = this.hoverColor;
            if(this.radius < this.maxRadius){
                this.radius+= 2;
            }
        }
        else if(this.radius > this.minRadius){
            this.radius -= 1;
        }else{
            this.color = '#ffffff00';
        }

        if(hideCircles == false){
            this.color = this.hoverColor;
        }

        this.draw();
    }
}

function Word(x,y,dx,dy,Char){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.color = '#ffffff00';
    this.hoverColor = randomColor();

    this.draw = function(){
        c.font = '30pt Arial';
        c.save();
        c.translate(this.x,this.y);
        c.rotate(-0.5*Math.PI);
        
        var rText = Char;
        c.fillText(rText , 0, 0);
        c.restore();
    }

    this.update = function(){
        if (this.x >= innerWidth || this.x <= 0){
            this.dx = -this.dx;
        }
        if (this.y >= innerHeight || this.y <= 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        if(hideCircles == false){
            this.color = this.hoverColor;
        }

        this.draw();
    }
}

function animate(){
    c.clearRect(0,0,innerWidth,innerHeight);
    circles.forEach(Circle => {
        Circle.update();
    });
    words.forEach(Word => {
        Word.update();
        words.length;
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
