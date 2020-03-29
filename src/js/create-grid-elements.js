import { canvas } from "./globals";
import { settings } from "./get-settings.js";
import getGridElementRoundness from "./get-grid-element-roundness.js";
import getGridElementTransformation from "./get-grid-element-transformation.js";

import getGridElementStyle from "./get-grid-element-style.js";

const createGridElements = function() {
  const base = settings.baseCount;

  for (let i = 0; i < base * base; i++) {
    const gridElement = document.createElement("div");
    getGridElementRoundness(gridElement);
    getGridElementTransformation(gridElement);
    getGridElementStyle(gridElement);
    gridElement.classList.add("grid-element");
    canvas.appendChild(gridElement);
  }
};

export default createGridElements;
