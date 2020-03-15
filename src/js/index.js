//hotModuleReplacement
if (module.hot) {
  module.hot.accept();
}
//imports
import "../index.html";
import "../scss/index.scss";
import { base, borderWidth, canvas, createPattern } from "./globals";
import clearPattern from "./clear-pattern";
const getSettings = require("./get-settings");
const createGrid = require("./create-grid");

//main function
function makePattern() {
  clearPattern();
  createGrid();
  let int = base;
  for (let i = 0; i < int * int; i++) {
    const gridElement = document.createElement("div");
    addBorder(gridElement);
    gridElement.classList.add("grid-element");
    canvas.appendChild(gridElement);
  }
}

function addBorder(item) {
  const randomNumber = Math.floor(Math.random() * Math.floor(3));
  const borderVariations = [
    `${borderWidth}px ${borderWidth}px ${borderWidth}px 0`,
    `${borderWidth}px ${borderWidth}px 0 ${borderWidth}px`,
    `${borderWidth}px 0 ${borderWidth}px ${borderWidth}px`,
    `0 ${borderWidth}px ${borderWidth}px ${borderWidth}px`
  ];
  item.style.borderWidth = borderVariations[randomNumber];
  return item;
}

makePattern();
createPattern.addEventListener("click", makePattern);
