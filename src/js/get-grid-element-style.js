import { settings } from "./get-settings.js";

const getGridElementStyle = function(item) {
  const borderWidth = settings.borderWidth;

  const randomNumber = Math.floor(Math.random() * Math.floor(4));
  const borderVariations = [
    `${borderWidth}px ${borderWidth}px ${borderWidth}px 0`,
    `${borderWidth}px ${borderWidth}px 0 ${borderWidth}px`,
    `${borderWidth}px 0 ${borderWidth}px ${borderWidth}px`,
    `0 ${borderWidth}px ${borderWidth}px ${borderWidth}px`,
    `0`
  ];
  item.style.borderWidth = borderVariations[randomNumber];
  return item;
};

export default getGridElementStyle;
