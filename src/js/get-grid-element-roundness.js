import { settings } from "./get-settings.js";
import randomizeInput from "./randomize-input.js";

const getGridElementRoundness = function(item) {
  const randomize = settings.randomize;
  const roundness = settings.roundness;
  const randomizeRoundness = settings.randomizeRoundness;

  if (randomizeRoundness) {
    item.style.borderRadius = `${randomizeInput(randomize, roundness)}%`;
  } else {
    item.style.borderRadius = `${roundness}%`;
  }

  return item;
};

export default getGridElementRoundness;
