/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomNumber(array) {
  const numRandomPosition = Math.floor(Math.random() * array.length);
  return array[numRandomPosition];
}

function generateRandonCard() {
  let suit = ["diamantes", "corazones", "picas", "treboles"];
  let numtarjeta = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  const numberCard = document.getElementById("number");
  numberCard.innerHTML = randomNumber(numtarjeta);

  const numRandomsuit = randomNumber(suit);

  const logoCardTop = document.getElementById("logtop");
  const logoCardBottom = document.getElementById("logbotton");

  logoCardTop.className = numRandomsuit;
  logoCardBottom.className = numRandomsuit;
}

window.onload = function() {
  document
    .querySelector("#btnewCard")
    .addEventListener("click", generateRandonCard);

  window.setInterval(generateRandonCard, 10000);

  summitButtom.addEventListener("click", printWidthHeight);
};

const widthInput = document.querySelector("#widthCard");
const heightInput = document.querySelector("#heightCard");
const cardElement = document.querySelector("#card");

const printWidthHeight = () => {
  console.log(widthInput.value, heightInput.value);
  cardElement.style.width = widthInput.value + "px";
  cardElement.style.height = heightInput.value + "px";
};
