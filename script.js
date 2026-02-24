const numbers = document.querySelectorAll("button.number");
const operators = document.querySelectorAll("button.operator");
const decimal = document.getElementById("decimal");
const result = document.getElementById("result");
const AC = document.getElementById("AC");
const display = document.getElementById("display");

let a=0;
let b=0;
let operation;
let isSecondNumber=false;


function add(a,b){
  console.log(a+b);
  return a+b;
};

function subtract(a,b){
  console.log(a-b);
  return a-b;
};

function multiply(a,b){
  console.log(a*b);
  return a*b;
};

function divide(a,b){
  console.log(a/b);
  return a/b;
};

function operate(a,b,o){
  if(o == "+"){
    return add(a,b);
  }
  else if(o == "-"){
    return subtract(a,b);
  }
  else if(o == "*"){
    return multiply(a,b);
  }
  else if(o == "/"){
    return divide(a,b);
  }
  else console.log("Please select a basic operator");
}


operators.forEach(operator =>{
  operator.addEventListener("click", (e)=>{

    if(isSecondNumber === false){
    isSecondNumber = true;
    operation = e.target.innerHTML;
    console.log(`Operator: ${operation}`);
  }
  
  else if(isSecondNumber === true){
      display.innerHTML = operate(a,b,operation);
  }
})
})

numbers.forEach(number =>{
number.addEventListener("click", (e) =>{
  if(isSecondNumber === false){
  a = a+e.target.innerHTML-0;
  display.innerHTML = a;
  console.log(isSecondNumber);
  console.log(`a: `+a);
  }
  
  else if(isSecondNumber === true){
  b = b+e.target.innerHTML-0;
  display.innerHTML = b;
  console.log(isSecondNumber);
  console.log(`b: `+b);
  
  }
  });
});

decimal.addEventListener("click", (e)=>{
  if(isSecondNumber === false){
    a = a+".";
  }
  else if(isSecondNumber === true){
    b = b+".";
  }
});

result.addEventListener("click", () =>{
  display.innerHTML = operate(a,b,operation);
  a = 0;
  b = 0;
  operation = "";
  isSecondNumber = false;
});

AC.addEventListener("click", ()=>{
  display.innerHTML = 0;
  a=0;
  b=0;
  operation = "";
  isSecondNumber = false;
})