const canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "lightblue";

//FOR DROWING
const context = canvas.getContext("2d");
context.fillStyle = "darkslategrey";



context.fillRect(200,200,100,100);

//line
context.beginPath();
context.lineWidth= 3;
context.moveTo(50,50);
context.lineTo(200,200);

context.stroke();
context.lineTo(250,250);


//context.endPath();

const grd = context.createLinearGradient(250,300,500,200);
grd.addColorStop(0,"red");
grd.addColorStop(1,"black");
context.fillStyle = grd;

context.fillRect(300,300,500,500);






context.beginPath();
context.arc(300, 300, 50, 0, 1 * Math.PI);
context.stroke();
context.closePath();


context.beginPath();
context.arc(250, 250, 40, 0, 2 * Math.PI);
context.stroke();
context.closePath();



context.beginPath();
context.arc(350, 250, 40, 0, 2 * Math.PI);
context.stroke();
context.closePath();

//ON MOUSE CLICK

addEventListener("click", function (event) {
    console.log(event);
    context.beginPath();
    context.arc(event.x, event.y, 50, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();
})

//ON MOUSEMOVE

addEventListener("mousemove",function(event)
{
    console.log(event);
    context.clearRect(0,0,canvas.width,canvas.height);
    context.beginPath();
    context.arc(event.x,event.y,50,0,2*Math.PI);
    context.stroke();
    context.closePath();


})


//CIRLCLE UP; DOWN ;RIGHT ; LEFT 

let x = 100;
let y = 100;
addEventListener("keydown", function (event) {
    if (event.key == "ArrowRight") {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(x, 100, 80, 80);
        x++;
    }
    if (event.key == "ArrowLeft") {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(x, 100, 80, 80);
        x--;
    }
    if (event.key == "ArrowUp") {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(100, y, 80, 80);
        y--;
    }
    if (event.key == "ArrowDown") {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(100, y, 80, 80);
        y++;
    }

})



let isClicked = false;
addEventListener("click", function (event) {
    isClicked = true;
})
addEventListener("mousemove", function (event) {
    if (isClicked == true) {
        console.log(event);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(event.x, event.y, 50, 0, 1*Math.PI);
        context.fillStyle = "slateblue";
        context.fill(); 
        context.closePath();
    }
})























