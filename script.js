/*let num1=document.querySelector("#num1");
let num2=document.querySelector("#num2");
let btnAdd=document.querySelector("#btnAdd");
let btnSub=document.querySelector("#btnSub");
let btnMul=document.querySelector("#btnMul");
let btnDiv=document.querySelector("#btnDiv");
let result=document.querySelector("#result");
let resultbox=document.querySelector("#resultbox");


btnAdd.addEventListener("click",add);
btnSub.addEventListener("click",sub);
btnMul.addEventListener("click",mul);
btnDiv.addEventListener("click",div);


function add()
{

    let a=parseInt(num1.value);
    let b=parseInt(num2.value);
    resultbox.value=a+b;
    result.innerText=a+b;
}


function sub()
{

    let a=parseInt(num1.value);
    let b=parseInt(num2.value);
    resultbox.value=a-b;
    result.innerText=a-b;
}


function mul()
{

    let a=parseInt(num1.value);
    let b=parseInt(num2.value);
    resultbox.value=a*b;
    result.innerText=a*b;
}

function div()
{

    let a=parseInt(num1.value);
    let b=parseInt(num2.value);
    resultbox.value=a/b;
    result.innerText=a/b;
}*/

/*for(i=0;i<=2;i++)
{
    let num1=document.querySelector("#num1");
}


let num1=document.querySelector("#num1")
let btnAdd=document.querySelector("#btnAdd");
let btnSub=document.querySelector("#btnSub");
let btnMul=document.querySelector("#btnMul");
let btnDiv=document.querySelector("#btnDiv");

btnAdd.addEventListener("click",add);
btnSub.addEventListener("click",sub);
btnMul.addEventListener("click",mul);
btnDiv.addEventListener("click",div);


function add()
{

    let a=parseInt(num1.value);
    let b=parseInt(num2.value);
    resultbox.value=a+b;
    result.innerText=a+b;
}


function sub()
{

    let a=parseInt(num1.value);
    let b=parseInt(num2.value);
    resultbox.value=a-b;
    result.innerText=a-b;
}


function mul()
{

    let a=parseInt(num1.value);
    let b=parseInt(num2.value);
    resultbox.value=a*b;
    result.innerText=a*b;
}

function div()
{

    let a=parseInt(num1.value);
    let b=parseInt(num2.value);
    resultbox.value=a/b;
    result.innerText=a/b;}*/

//JAVASCRIPT PROGRAM FOR THE REAL CALCULATOR

/* let input = document.getElementById("inputBox");
 let buttton=document.querySelectorAll("button");

 let string ="";
 let arr = Array.from(button);
 arr.forEach((button)=> {
     buttton.addEventListener("click", function(event){
         event.preventDefault();
     });
 
 button.addEventListener("click",(e)=> {
     if (e.target.innerHTML == "="){
         string = eval(string);
         input.value = string;
     
     }
     else if (e.target.innerHTML=="AC"){
         string ="";
         input.value = string;
     }
     else if(e.targetHTML=="DE"){
         string = string.substring(0,string.length -1);
     
     }

 else{
     string+= e.target.innerHTML;
     input.value = string;
 }})
 })*/



//JAVASCRIPT FOR CALCULATOR DESIGNED BY SIR
let operator = "";
let isreset = false;
let display = document.querySelector("#display");
let digits = document.querySelectorAll(".digits");

let equalBtn = document.querySelector(".equalBtn");
equalBtn.addEventListener("click", equalClick);

let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", addClick);

let subBtn = document.querySelector("#minBtn");
subBtn.addEventListener("click", subClick);

let mulBtn = document.querySelector("#mulBtn");
mulBtn.addEventListener("click", mulClick);

let divBtn = document.querySelector("#divBtn");
divBtn.addEventListener("click", divClick);





for (i = 0; i < digits.length; i++)
    digits[i].addEventListener("click", digitsClick);


function digitsClick(event) {

    if (display.value == "0") {
        display.value = "";
    }
    
        display.value = display.value + event.target.innerText;
    
}
function addClick() {
    num1 = parseFloat(display.value);
    operator = "+";
    display.value = "0";
}
function subClick() {
    operator = "-";
    display.value = "0";
}
function mulClick() {
    num1 = parseFloat(display.value);
    operator = "*";
    display.value = "0";
}
function divClick() {
    num1 = parseFloat(display.value);
    operator = "/";
    display.value = "0";
}

function equalClick() {
    if (operator == "+") {
        let num2 = parseFloat(display.value);
        result = num1 + num2
        display.value = result;
    }
    if (operator == "-") {
        let num2 = parseFloat(display.value);
        result = num1 - num2
        display.value = result;
    }
    if (operator == "*") {
        let num2 = parseFloat(display.value);
        result = num1 * num2
        display.value = result;
    }
    if (operator == "/") {
        let num2 = parseFloat(display.value);
        result = num1 / num2
        display.value = result;
    }
}
//JAVASCRIPT FOR ARRAY BY ADDING AND DELETING ELEMENTS FROM INPUT

let arrayResultBox = document.querySelector("#arrayResultBox");
let arrayAddBox = document.querySelector("#arrayAddBox");
let arrayDelBox = document.querySelector("#arrayDelBox");

let arrayAddBox = document.querySelector("#arrayAddBtn");
arrayAddBtn.










