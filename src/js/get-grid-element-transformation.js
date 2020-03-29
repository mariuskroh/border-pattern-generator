import { settings } from "./get-settings.js";
import randomizeInput from "./randomize-input.js";

export default function getGridElementTransformation(item) {
  const rotation = settings.rotation;
  const scale = settings.scale / 10;
  const randomize = settings.randomize;
  const randomizeRotation = settings.randomizeRotation;
  const randomizeScale = settings.randomizeScale;
  let calculatedRotation;
  let calculatedScale;

  randomizeRotation
    ? (calculatedRotation = randomizeInput(randomize, rotation))
    : (calculatedRotation = rotation);

  randomizeScale
    ? (calculatedScale = randomizeInput(randomize, scale))
    : (calculatedScale = scale);

  item.style.transform = `rotate(${calculatedRotation}deg) scale(${calculatedScale})`;
  return item;
}
