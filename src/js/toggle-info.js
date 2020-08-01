export default function toggleInfo() {
  const grid = document.querySelector(".layout-grid");
  const infoScreen = document.querySelector("#info-screen");
  const infoText = document.querySelector("#info-text");

  infoScreen.classList.toggle("display");
  infoText.classList.toggle("display");
  grid.classList.toggle("blur");

  infoScreen.addEventListener("click", toggleInfo);
  infoText.addEventListener("click", toggleInfo);
}
