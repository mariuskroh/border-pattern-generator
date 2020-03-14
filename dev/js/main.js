//import
let globals = require("./globals");
let clearPattern = require("./clearpattern");
//pattern
function makePattern() {
  clearPattern();
  let int = globals.base;
  for (let i = 0; i < int * int; i++) {
    const gridElement = document.createElement("div");
    addBorder(gridElement);
    gridElement.classList.add("grid-element");
    globals.screen.appendChild(gridElement);
  }
}

function addBorder(item) {
  const randomNumber = Math.floor(Math.random() * Math.floor(3));
  const borderVariations = [
    `${globals.borderWidth}px ${globals.borderWidth}px ${globals.borderWidth}px 0`,
    `${globals.borderWidth}px ${globals.borderWidth}px 0 ${globals.borderWidth}px`,
    `${globals.borderWidth}px 0 ${globals.borderWidth}px ${globals.borderWidth}px`,
    `0 ${globals.borderWidth}px ${globals.borderWidth}px ${globals.borderWidth}px`
  ];
  item.style.borderWidth = borderVariations[randomNumber];
  return item;
}

makePattern();
createPattern.addEventListener("click", makePattern);
