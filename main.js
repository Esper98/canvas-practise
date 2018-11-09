var canvas = document.querySelector('canvas');
console.log(canvas);

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');

c.fillStyle = "rgba(255,0,0,0.4)";
c.fillRect(10,10,50,50);
c.fillRect(10,70,50,50);
c.fillRect(70,10,50,50);
c.fillRect(70,70,50,50);



function randomColor(){
    var color = ['red', 'blue', 'yellow', 'black', 'grey', 'green', 'orange']; 
    var strokeStyle = color[Math.floor(Math.random() * color.length)]; 
    return strokeStyle;
}


//random circles
for (let i = 0; i < 100; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x,y,20,0,10,false);
    c.strokeStyle = "blue";


    c.strokeStyle = randomColor();

    c.stroke();
}



function drawStrokes(){
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    c.beginPath();
    c.moveTo(x,y);

    for (let i = 0; i < 10; i++) {
        x = Math.random() * window.innerWidth;
        y = Math.random() * window.innerHeight;
    
    
        c.lineTo(x,y);
    }
    
    c.strokeStyle = randomColor();
    c.stroke();
    //random strokes
}

drawStrokes();
