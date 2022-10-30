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

function sumNum(button1, button2) {
  return button1 + button2;
}

function restNum(button1, button2) {
  return button1 - button2;
}

function multNum(button1, button2) {
  return button1 * button2;
}

function divNum(button1, button2) {
  return button1 / button2;
}

function percentage(button1) {
  return button1 / 100;
}

function dispNum() {
  if (calcDisp.textcontent != 0) {
  }
  calcDisp.textContent(`${numBtn.value}`);
}
