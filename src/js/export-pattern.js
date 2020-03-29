import { canvas } from "./globals.js";
import html2canvas from "html2canvas";

const options = {
  onclone: function() {
    canvas.style.width = "1000 px";
  }
};
export default function htmlCanvas() {
  html2canvas(canvas, options).then(function(canvas) {
    const img = canvas.toDataURL("image/png");
    downloadImage(img, "pattern.png");
    console.log("toData");
  });
}

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
