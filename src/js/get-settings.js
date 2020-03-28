const baseCount = document.querySelector("#base-count");
const strokeWidth = document.querySelector("#stroke-width");
const gapSize = document.querySelector("#gap-size");
const elementStyle = document.querySelector("#element-style");
const roundness = document.querySelector("#roundness");
const spaces = document.querySelector("#spaces");

export let settings = {};
export const getSettings = function() {
  settings = {
    baseCount: baseCount.value,
    strokeWidth: strokeWidth.value,
    gapSize: gapSize.value,
    elementStyle: elementStyle.value,
    roundness: roundness.value,
    spaces: spaces.value
  };
  console.clear();
  console.table(settings);
  return settings;
};
