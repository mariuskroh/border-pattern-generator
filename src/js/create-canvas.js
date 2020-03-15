import { canvas } from "./globals";
const createCanvas = function() {
  const windowWidth = window.innerWidth;
  canvas.style.width = `${windowWidth / 2}px`;
  canvas.style.height = `${windowWidth / 2}px`;
};

export default createCanvas;
