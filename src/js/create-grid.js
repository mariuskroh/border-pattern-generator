import { canvas } from "./globals";
import { settings } from "./get-settings.js";

//all values from globals should come from "get settings" later
const createGrid = function() {
  const base = settings.baseCount;
  const gapSize = settings.gapSize;

  canvas.style.gridTemplateColumns = `repeat(${base}, 1fr`;
  canvas.style.gridTemplateRows = `repeat(${base}, 1fr)`;
  canvas.style.gridColumnGap = `${gapSize}px`;
  canvas.style.gridRowGap = `${gapSize}px`;
};

export default createGrid;
