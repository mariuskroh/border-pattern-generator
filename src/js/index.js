//hotModuleReplacement
if (module.hot) {
  module.hot.accept();
}
//imports
import "../index.html";
import "../scss/index.scss";
import { inputs, createPattern } from "./globals.js";
import clearPattern from "./clear-pattern.js";
import createCanvas from "./create-canvas.js";
import createGrid from "./create-grid.js";
import createGridElements from "./create-grid-elements.js";
import { getSettings } from "./get-settings.js";

//main function
function makePattern() {
  clearPattern();
  createCanvas();
  createGrid();
  createGridElements();
}
//run on page load
getSettings();
makePattern();
createPattern.addEventListener("click", makePattern);
//run on input change
inputs.forEach(input => input.addEventListener("change", getSettings));
inputs.forEach(input => input.addEventListener("change", makePattern));
