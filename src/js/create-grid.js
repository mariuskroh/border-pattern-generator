import { base, gapSize, canvas } from "./globals";

//all values from globals should come from "get settings" later
const createGrid = function() {
  canvas.style.gridTemplateColumns = `repeat(${base}, 1fr`;
  canvas.style.gridTemplateRows = `repeat(${base}, 1fr)`;
  canvas.style.gridColumnGap = `${gapSize}px`;
  canvas.style.gridRowGap = `${gapSize}px`;
};

export default createGrid;
