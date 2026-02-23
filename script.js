let a=0;
let b=0;
let operator;

function add(a,b){
  return console.log(a+b);
};

function subtract(a,b){
  return console.log(a-b);
};

function multiply(a,b){
  return console.log(a*b);
};

function divide(a,b){
  return console.log(a/b);
};

function operate(a,b,o){
  if(o == "+"){
    add(a,b);
  }
  else if(o == "-"){
    subtract(a,b);
  }
  else if(o == "*"){
    multiply(a,b);
  }
  else if(o == "/"){
    divide(a,b);
  }
  else console.log("Please select a basic operator");
}

const buttons = document.querySelectorAll("button.number");
const display = document.getElementById("display");

buttons.forEach(button =>{
button.addEventListener("click", (e) =>{
  a = e.target.innerHTML;
  display.innerHTML = a;
  console.log(a);
  });
});