import { base, borderWidth, canvas } from "./globals";

//all values from globals should come from "get settings" later
const createGridElements = function() {
  let int = base;
  for (let i = 0; i < int * int; i++) {
    const gridElement = document.createElement("div");
    gridElement.style.width = "20px";
    gridElement.style.height = "20px";
    addBorder(gridElement);
    gridElement.classList.add("grid-element");
    canvas.appendChild(gridElement);
  }
};

export default createGridElements;

function addBorder(item) {
  const randomNumber = Math.floor(Math.random() * Math.floor(5));
  const borderVariations = [
    `${borderWidth}px ${borderWidth}px ${borderWidth}px 0`,
    `${borderWidth}px ${borderWidth}px 0 ${borderWidth}px`,
    `${borderWidth}px 0 ${borderWidth}px ${borderWidth}px`,
    `0 ${borderWidth}px ${borderWidth}px ${borderWidth}px`,
    `0`
  ];
  item.style.borderWidth = borderVariations[randomNumber];
  return item;
}
