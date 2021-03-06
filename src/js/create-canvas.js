import { canvas } from "./globals";
export default function createCanvas() {
  const windowWidth = window.innerWidth;

  canvas.style.width = `${windowWidth / 2}px`;
  canvas.style.height = `${windowWidth / 2}px`;
  canvas.style.left = `50%`;
  canvas.style.top = `50%`;
  canvas.style.transform = `translate(-50%, -50%)`;
  return;
}
