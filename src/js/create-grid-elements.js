import { canvas } from "./globals";
import { settings } from "./get-settings.js";
import getGridElementStyle from "./get-grid-element-style.js";

const createGridElements = function() {
  const base = settings.baseCount;

  for (let i = 0; i < base * base; i++) {
    const gridElement = document.createElement("div");
    getGridElementStyle(gridElement);
    gridElement.classList.add("grid-element");
    canvas.appendChild(gridElement);
  }
};

export default createGridElements;
