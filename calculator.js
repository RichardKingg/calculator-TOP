// Head of container
const calcBody = document.getElementById("calcBody");
const calcHead = document.getElementById("calcHead");
const calcDisp = document.getElementById("calcDisp");

// Button container
const calcBtnCont = document.getElementById("calcBtnCont");
const calcRow = document.getElementsByClassName("calcRow");

// Buttons
const numBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const clrBtn = document.getElementById("onReset");
const equalsBtn = document.getElementById("equalsBtn");
const pointBtn = document.getElementById("pointBtn");
const percentBtn = document.getElementById("percentBtn");
const signBtn = document.getElementById("signBtn");

let firstOperand = "";
let secondOperand = "";
let currentOp = null;
let shouldResetScreen = false;

//initializers
clrBtn.addEventListener("click", clear);
equalsBtn.addEventListener("click", evaluate);
pointBtn.addEventListener("click", appendPoint);
percentBtn.addEventListener("click", evalPerc);
signBtn.addEventListener("click", changeSign);

numBtns.forEach((button) =>
  button.addEventListener("click", () => appendNum(button.textContent))
);
operatorBtns.forEach((button) =>
  button.addEventListener("click", () => runOperation(button.textContent))
);

//function for adding numbers to display
function appendNum(number) {
  if (calcDisp.textContent === "0" || shouldResetScreen) {
    resetScreen();
  }
  calcDisp.textContent += number;
}

//function for reseting display screen
function resetScreen() {
  calcDisp.textContent = "";
  shouldResetScreen = false;
}

//function for clearing display content
function clear() {
  calcDisp.textContent = "0";
  firstOperand = "";
  secondOperand = "";
  currentOp = null;
}

function changeSign() {
  firstOperand = calcDisp.textContent;
  calcDisp.textContent = sign(firstOperand);
}

//function for adding "." to display, if there is already ".", return
function appendPoint() {
  if (calcDisp.textContent === "") {
    calcDisp.textContent = "0";
  }
  if (calcDisp.textContent.includes(".")) return;
  calcDisp.textContent += ".";
}

//function when an operation is set
function runOperation(operator) {
  if (currentOp !== null) {
    evaluate();
  }
  firstOperand = calcDisp.textContent;
  currentOp = operator;
  calcDisp.textContent = `${firstOperand} ${currentOp}`;
  shouldResetScreen = true;
}

//function for evaluating percent function
function evalPerc() {
  firstOperand = calcDisp.textContent;
  calcDisp.textContent = percentage(firstOperand);
  currentOp = null;
}

//function for the result
function evaluate() {
  if (currentOp === null || shouldResetScreen) return;
  if (currentOp === "/" && calcDisp.textContent === "0") {
    alert("You can't divide by 0");
    return;
  }
  secondOperand = calcDisp.textContent;
  calcDisp.textContent = rounder(
    operate(currentOp, firstOperand, secondOperand)
  );
  currentOp = null;
}

function add(a, b) {
  return a + b;
}

function subs(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function divi(a, b) {
  return a / b;
}

function markUP(a, b) {
  let mk = 100 - b;
  let c = (b * a) / mk;
  return a + c;
}

function percentage(a) {
  return a / 100;
}

function sign(a) {
  return a * -1;
}
//function for rounding numbers
function rounder(number) {
  return Math.round(number * 1000) / 1000;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);

  switch (operator) {
    case "+":
      return add(a, b);

    case "-":
      return subs(a, b);

    case "x":
      return mult(a, b);

    case "/":
      if (b === 0) return null;
      else return divi(a, b);

    case "MU":
      return markUP(a, b);

    default:
      return null;
  }
}
