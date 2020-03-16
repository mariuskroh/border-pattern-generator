import { base, canvas } from "./globals";
import getGridElementStyle from "./get-grid-element-style.js";
//all values from globals should come from "get settings" later
const createGridElements = function() {
  for (let i = 0; i < base * base; i++) {
    const gridElement = document.createElement("div");
    getGridElementStyle(gridElement);
    gridElement.classList.add("grid-element");
    canvas.appendChild(gridElement);
  }
};

export default createGridElements;
