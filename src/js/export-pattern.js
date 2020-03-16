import { canvas } from "./globals.js";
import html2canvas from "html2canvas";

export const htmlCanvas = function() {
  html2canvas(canvas).then(function(canvas) {
    // document.body.appendChild(canvas);
  });
};
export default htmlCanvas;
