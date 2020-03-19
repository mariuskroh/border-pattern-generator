const baseCount = document.querySelector("#base-count");
const borderWidth = document.querySelector("#border-width");
const gapSize = document.querySelector("#gap-size");
const elementStyle = document.querySelector("#element-style");
export let settings = {};
export const getSettings = function() {
  settings = {
    baseCount: baseCount.value,
    borderWidth: borderWidth.value,
    gapSize: gapSize.value,
    elementStyl: elementStyle.value
  };
  console.clear();
  console.table(settings);
  return settings;
};
