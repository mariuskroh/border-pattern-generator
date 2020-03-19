import { canvas } from "./globals";
const createCanvas = function() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const size = canvas.offsetWidth / 2;
  canvas.style.width = `${windowWidth / 2}px`;
  canvas.style.height = `${windowWidth / 2}px`;
  canvas.style.left = `50%`;
  canvas.style.top = `50%`;
  canvas.style.transform = `translate(-50%, -50%)`;
};

export default createCanvas;
