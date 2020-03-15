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
import createGridElements from "./create-grid-elements.js";

//main function
function makePattern() {
  clearPattern();
  createCanvas();
  createGrid();
  createGridElements();
}

makePattern();
createPattern.addEventListener("click", makePattern);
