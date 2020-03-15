//hotModuleReplacement
if (module.hot) {
  module.hot.accept();
}
//imports
import "../index.html";
import "../scss/index.scss";
import { base, borderWidth, canvas, createPattern } from "./globals.js";
import clearPattern from "./clear-pattern.js";
import createCanvas from "./create-canvas.js";
import createGrid from "./create-grid.js";

//main function
function makePattern() {
  clearPattern();
  createCanvas();
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
  const randomNumber = Math.floor(Math.random() * Math.floor(5));
  const borderVariations = [
    `${borderWidth}px ${borderWidth}px ${borderWidth}px 0`,
    `${borderWidth}px ${borderWidth}px 0 ${borderWidth}px`,
    `${borderWidth}px 0 ${borderWidth}px ${borderWidth}px`,
    `0 ${borderWidth}px ${borderWidth}px ${borderWidth}px`,
    `0`
  ];
  item.style.borderWidth = borderVariations[randomNumber];
  return item;
}

makePattern();
createPattern.addEventListener("click", makePattern);
