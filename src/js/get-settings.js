const baseCount = document.querySelector("#base-count");
const borderWidth = document.querySelector("#border-width");
const gapSize = document.querySelector("#gap-size");
export let settings = {};
export const getSettings = function() {
  settings = {
    baseCount: baseCount.value,
    borderWidth: borderWidth.value,
    gapSize: gapSize.value
  };
  console.clear();
  console.table(settings);
  return settings;
};
