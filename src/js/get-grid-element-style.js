import { settings } from "./get-settings.js";

const getGridElementStyle = function(item) {
  const strokeWidth = settings.strokeWidth;
  const selectedStyle = settings.elementStyle;
  const spaces = settings.spaces;

  // the different border styles
  const elementStyles = {
    single: [
      `${strokeWidth}px 0 0 0`,
      `0 ${strokeWidth}px 0 0`,
      `0 0${strokeWidth}px 0`,
      `0 0 0 ${strokeWidth}px `
    ],
    parallel: [
      `${strokeWidth}px 0 ${strokeWidth}px 0`,
      `0 ${strokeWidth}px 0 ${strokeWidth}px`
    ],
    corner: [
      `${strokeWidth}px ${strokeWidth}px 0 0`,
      `0 ${strokeWidth}px ${strokeWidth}px 0`,
      `0 0 ${strokeWidth}px ${strokeWidth}px`,
      `${strokeWidth}px 0 0 ${strokeWidth}px`
    ],
    open: [
      `${strokeWidth}px ${strokeWidth}px ${strokeWidth}px 0`,
      `${strokeWidth}px ${strokeWidth}px 0 ${strokeWidth}px`,
      `${strokeWidth}px 0 ${strokeWidth}px ${strokeWidth}px`,
      `0 ${strokeWidth}px ${strokeWidth}px ${strokeWidth}px`
    ],
    square: [`${strokeWidth}px `]
  };
  // setup the  elements variations
  let styleVariations = [];
  // push spaces which will result in an empty element
  for (let i = 0; i < spaces; i++) {
    styleVariations.push(`0`);
  }
  // now get selected element style from the object above and push each setting
  const style = elementStyles[selectedStyle];
  style.forEach(element => styleVariations.push(element));
  // get random number based on styleVariations array length
  const limit = styleVariations.length;
  const getRandomNumber = Math.floor(Math.random() * Math.floor(limit));
  // get the style & apply to element
  item.style.borderWidth = styleVariations[getRandomNumber];

  return item;
};

export default getGridElementStyle;
