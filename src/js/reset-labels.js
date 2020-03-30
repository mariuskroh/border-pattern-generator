import displaySliderValues from "./display-slider-values.js";

export default function resetLabels() {
  this.removeEventListener("mousemove", displaySliderValues);
  this.removeEventListener("mouseout", resetLabels);
  const sliderName = this.name;
  const sliderId = this.id;
  const label = document.querySelector(`label[for="${sliderId}"]`);
  label.innerHTML = sliderName;
}
