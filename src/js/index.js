//webpack hmr
if (module.hot) {
  module.hot.accept();
}
//imports
import "../index.html";
import "../scss/index.scss";
import {
  inputs,
  range,
  select,
  createPattern,
  exportPattern
} from "./globals.js";
import clearPattern from "./clear-pattern.js";
import createCanvas from "./create-canvas.js";
import createGrid from "./create-grid.js";
import createGridElements from "./create-grid-elements.js";
import { getSettings } from "./get-settings.js";
import displaySliderValues from "./display-slider-values.js";
import htmlCanvas from "./export-pattern.js";
import displayVersion from "./display-version.js";

//main function
function makePattern() {
  clearPattern();
  createCanvas();
  createGrid();
  createGridElements();
}
//get initial settings & run on page load
getSettings();
makePattern();
//create pattern with current settings
createPattern.addEventListener("click", makePattern);
//get settings & run on input change
inputs.forEach(input => input.addEventListener("change", getSettings));
inputs.forEach(input => input.addEventListener("change", makePattern));
select.addEventListener("change", getSettings);
select.addEventListener("change", makePattern);
//display slider values
range.forEach(slider => slider.addEventListener("change", displaySliderValues));
//resize canvas
window.addEventListener("resize", createCanvas);
//export pattern
exportPattern.addEventListener("click", htmlCanvas);
//get version
displayVersion();
