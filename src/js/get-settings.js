const baseCount = document.querySelector("#base-count");
const strokeWidth = document.querySelector("#stroke-width");
const gapSize = document.querySelector("#gap-size");
const elementStyle = document.querySelector("#element-style");
export let settings = {};
export const getSettings = function() {
  settings = {
    baseCount: baseCount.value,
    strokeWidth: strokeWidth.value,
    gapSize: gapSize.value,
    elementStyle: elementStyle.value
  };
  console.clear();
  console.table(settings);
  return settings;
};
