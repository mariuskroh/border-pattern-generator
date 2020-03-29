import { settings } from "./get-settings.js";
import randomizeInput from "./randomize-input.js";

export default function getGridElementRoundness(item) {
  const randomize = settings.randomize;
  const roundness = settings.roundness;
  const randomizeRoundness = settings.randomizeRoundness;

  if (randomizeRoundness) {
    item.style.borderRadius = `${randomizeInput(randomize, roundness)}%`;
  } else {
    item.style.borderRadius = `${roundness}%`;
  }

  return item;
}
