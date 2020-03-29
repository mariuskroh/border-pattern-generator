const baseCount = document.querySelector("#base-count");
const strokeWidth = document.querySelector("#stroke-width");
const gapSize = document.querySelector("#gap-size");
const elementStyle = document.querySelector("#element-style");
const roundness = document.querySelector("#roundness");
const spaces = document.querySelector("#spaces");
const rotation = document.querySelector("#rotation");
const scale = document.querySelector("#scale");
const randomize = document.querySelector("#randomize");
const randomizeRoundness = document.querySelector("#randomizeRoundness");
const randomizeRotation = document.querySelector("#randomizeRotation");
const randomizeScale = document.querySelector("#randomizeScale");

export let settings = {};
export const getSettings = function() {
  settings = {
    baseCount: baseCount.value,
    strokeWidth: strokeWidth.value,
    gapSize: gapSize.value,
    elementStyle: elementStyle.value,
    roundness: roundness.value,
    spaces: spaces.value,
    rotation: rotation.value,
    scale: scale.value,
    randomize: randomize.value,
    randomizeRotation: randomizeRotation.checked,
    randomizeRoundness: randomizeRoundness.checked,
    randomizeScale: randomizeScale.checked
  };
  console.clear();
  console.table(settings);
  return settings;
};
