const screen = document.querySelector("#canvas");
const base = 16;
const borderWidth = 4;

const createPattern = document.querySelector(".create-pattern");

function clearCanvas() {
  screen.innerHTML = "";
}

function makePattern() {
  clearCanvas();
  let int = base;
  for (let i = 0; i < int * int; i++) {
    const gridElement = document.createElement("div");
    addBorder(gridElement);
    gridElement.classList.add("grid-element");
    screen.appendChild(gridElement);
  }
}

function addBorder(item) {
  const randomNumber = Math.floor(Math.random() * Math.floor(3));
  const borderVariations = [
    `${borderWidth}px ${borderWidth}px ${borderWidth}px 0`,
    `${borderWidth}px ${borderWidth}px 0 ${borderWidth}px`,
    `${borderWidth}px 0 ${borderWidth}px ${borderWidth}px`,
    `0 ${borderWidth}px ${borderWidth}px ${borderWidth}px`
  ];
  item.style.borderWidth = borderVariations[randomNumber];
  return item;
}

createPattern.addEventListener("click", makePattern);
