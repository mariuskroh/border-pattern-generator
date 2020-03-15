import { base, gapSize, canvas } from "./globals";

//all values from globals should come from "get settings" later
const createGrid = function() {
  const canvasWidth = canvas.clientWidth;
  console.log(canvasWidth);
  canvas.style.gridTemplateColumns = `repeat(${base}, ${canvasWidth / base}px)`;
  canvas.style.gridTemplateRows = `repeat(${base}, ${canvasWidth / base}px)`;
  canvas.style.gridColumnGap = `${gapSize}px`;
  canvas.style.gridRowGap = `${gapSize}px`;
};

export default createGrid;
