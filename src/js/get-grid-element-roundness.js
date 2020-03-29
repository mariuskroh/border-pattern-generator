import { settings } from "./get-settings.js";

const getGridElementRoundness = function(item) {
  const roundness = settings.roundness;
  item.style.borderRadius = `${roundness}%`;
  return item;
};

export default getGridElementRoundness;
