import { settings } from "./get-settings.js";
// refactor this in further versions in more functions
// to make even more complicated patterns
const getGridElementStyle = function(item) {
  const strokeWidth = settings.strokeWidth;
  const selectedStyle = settings.elementStyle;
  // the different styles
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
      //sth not right here
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
  // setup the current elements variations
  //let styleVariations = [];
  //empty space selector comes here later + pushed to variations array!!
  // get random number based on elementStyle array length
  const limit = elementStyles[selectedStyle].length;
  const getRandomNumber = Math.floor(Math.random() * Math.floor(limit));
  // get the style & apply to element
  const style = elementStyles[selectedStyle];

  item.style.borderWidth = style[getRandomNumber];
  return item;
};

export default getGridElementStyle;
