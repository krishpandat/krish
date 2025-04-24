/*const canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "lightblue";

//FOR DROWING
const context = canvas.getContext("2d");
context.fillStyle = "darkslategrey";*/



/*context.fillRect(200,200,100,100);

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


*/

//MAKING A CLASS CIRCLE AND CRAW A CIRCL BY 4 ARRGUMENT GIVEN BY USER

/*class circle {
    x = 0;
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)

        context.fill();
        context.closePath();


    }
}

let c = new circle(100, 200, 100, "black");

c.draw();*/


//MAKING A CLASS CIRCLE AND CRAW A CIRCL BY 4 ARRGUMENT GIVEN BY USER

/*class circle {
    x = 0;
    setcircle(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)

        context.fill();

        context.closePath();
    }
}

let c = new circle(100, 200, 100, "black");
c.setcircle(100, 200, 100, "black");
c.draw();*/

//PUTTING AN ARRAY IN CLASSS CIRCLE

/*class circle {
    x = 0;
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)

        context.fill();
        context.closePath();


    }
}
for (i = 1; i <= 10; i++) 
    {
    let circleStore = [];
    let c1 = new circle(40+i*60,6+i*40,5+i*5,"green");
    circleStore.push(c1);
    c1.draw();

}*/

//PAINT BRUSH PROGRAM


/*const canvas = document.querySelector("#canvas");

canvas.width = 850;
canvas.height =450;
canvas.style.background = "lightblue";

const context = canvas.getContext("2d");

let RedBtn=document.querySelector("#RedBtn");
let BlueBtn=document.querySelector("#BlueBtn");
let GreenBtn=document.querySelector("#GreenBtn");
let DrawBtn=document.querySelector("#DrowBtn");

*/


//ANIMATION

/*
0.const canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "lightblue";

const context = canvas.getContext("2d");



class circle {
    factorx = 1;
    factory = 1;
    x = 0;
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        
            context.beginPath();

            context.fillStyle = this.color;
            
            context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)

            context.fill();

            context.closePath();
        
    }


    update() {
        this.x += this.factorx;
        this.y += this.factory;
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.draw();
        if ((this.y + this.radius) >= canvas.height) {

            this.factory = -1;
        }
        if ((this.y - this.radius) <= 0) {

            this.factory = 1;
        }
        if ((this.x + this.radius) >= canvas.width) {

            this.factorx = -1;
        }
        if ((this.x - this.radius) <= 0) {

            this.factorx = 1;
        }
    }
}
function updateAnimation() {
    requestAnimationFrame(updateAnimation);
    c.update();
}

let c = new circle(100, 200, 50, "darkorange");
c.draw();
c.update();
updateAnimation();*/

//AMIMATION OF A BALL ON CLICKING


/*const canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "lightblue";

const context = canvas.getContext("2d");

let isClicked = false;
addEventListener("click", function (event) {
    isClicked = true;
})

class circle {
    factorx = 1;
    factory = 1;
    setData() {
        this.x = x;
        this.y = y;
    }
    counter = 0;

    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        if (isClicked == true) {

            context.fillStyle = this.color;
            

            context.beginPath();

            context.fillStyle = this.color;

            context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            context.font = "45px Arial";
            context.textAlign = "center";
            context.fillText(this.counter, this.x, this.y);
            context.fill();
            context.closePath();


        }


    }


    update() {
        this.x += this.factorx;
        this.y += this.factory;

        //context.clearRect(0, 0, canvas.width, canvas.height);
        this.draw();
        if ((this.y + this.radius) >= canvas.height) {

            this.factory = -1;
            this.counter++;
        }
        if ((this.y - this.radius) <= 0) {

            this.factory = 1;
            this.counter++;
        }
        if ((this.x + this.radius) >= canvas.width) {

            this.factorx = -1;
            this.counter++;
        }
        if ((this.x - this.radius) <= 0) {

            this.factorx = 1;
            this.counter++;
        }
    }

}

function getData(event) {
    a = event.x;
    b = event.y;
}
function updateAnimation(event) {
    requestAnimationFrame(updateAnimation);
    this.x = event.x;
    this.y = event.y;
    c.update();
}

/*let c = new circle(100, 200, 50, "darkorange");
//c.draw();
//c.update();
//updateAnimation();
addEventListener("click", updateAnimation);*/
/*let circles = [];
for (i = 0; i <= 500; i++) {


    let c = new circle(60 + i * 20, 60 + i * 20, 50, "red");
    circles.push(c);

}
function updateAnimation() {
    requestAnimationFrame(updateAnimation);
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (i=0;i<circles.length;i++){
        circles[i].update();

    }
   
}*/





//c.draw();
//c.update();
//updateAnimation();
//addEventListener("click", updateAnimation);

//COLLISION OF CIRCLES

const canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "aqua";

const context = canvas.getContext("2d");

/*const img = new Image();
img.src = "images/photo.jpg";
img.onload = function () {
    context.drawImage(img, 100, canvas.height - img.height);
}
*/

//

class circle {

    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius; x
        this.color = color;
    }

    draw() {
        context.beginPath();
        context.strokeStyle = this.color;

        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);

        context.stroke();
        context.closePath();
    }
    update() {
        this.x += this.factorx;
        this.y += this.factory;

        //context.clearRect(0, 0, canvas.width, canvas.height);
        this.draw();
        if ((this.y + this.radius) >= canvas.height) {

            this.factory = -1;
            this.counter++;
        }
        if ((this.y - this.radius) <= 0) {

            this.factory = 1;
            this.counter++;
        }
        if ((this.x + this.radius) >= canvas.width) {

            this.factorx = -1;
            this.counter++;
        }
        if ((this.x - this.radius) <= 0) {

            this.factorx = 1;
            this.counter++;
        }
    }

}


let c1 = new circle(200, 200, 40, "green");
c1.draw();
addEventListener("click", function (e) {
    if (getDistance(e.x, e.y, c1.x, c1.y) <= 40) {
        c1.color = "red";
        c1.draw();

    }
})


function getDistance(x1, y1, x2, y2) {
    let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    return distance;
}
let c2 = new circle(600, 500, 100, "green");
c2.draw();

function updateAnimation() {
    requestAnimationFrame(updateAnimation);


}


updateAnimation();



