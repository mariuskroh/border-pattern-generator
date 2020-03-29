import { settings } from "./get-settings.js";

const getGridElementTransformation = function(item) {
  const rotation = settings.rotation;
  const scale = settings.scale / 10;
  const randomize = settings.randomize;
  const randomizeRotation = settings.randomizeRotation;
  const randomizeScale = settings.randomizeRotation;
  // apply rotation & scale
  item.style.transform = `rotate(${rotation}deg) scale(${scale})`;
  return item;
};

export default getGridElementTransformation;
