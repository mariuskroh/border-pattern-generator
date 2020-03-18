import { canvas } from "./globals.js";
import html2canvas from "html2canvas";

// const options = {
//   width: 1500,
//   height: 1500
// };
export const htmlCanvas = function() {
  html2canvas(canvas).then(function(canvas) {
    const img = canvas.toDataURL("image/png");
    downloadImage(img, "pattern.png");
  });
};
export default htmlCanvas;

//Creates (and removes) dummy anchor tag for automatic download
//Obviously not an ideal solution...
function downloadImage(data, filename = "pattern.png") {
  const a = document.createElement("a");
  a.href = data;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
