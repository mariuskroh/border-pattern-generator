import resetLabels from "./reset-labels.js";
export default function displaySliderValues(event) {
  this.addEventListener("mousemove", displaySliderValues);
  this.addEventListener("mouseout", resetLabels);
  const sliderValue = this.value;
  const sliderId = this.id;
  const label = document.querySelector(`label[for="${sliderId}"]`);
  label.innerHTML = sliderValue;

  return sliderValue;
}
