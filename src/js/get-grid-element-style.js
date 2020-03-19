import { settings } from "./get-settings.js";

const getGridElementStyle = function(item) {
  const borderWidth = settings.borderWidth;
  // set the different styles
  // needs to be refactored into separate object
  const singleVariations = [
    `${borderWidth}px 0 0 0`,
    `0 ${borderWidth}px 0 0`,
    `0 0${borderWidth}px 0`,
    `0 0 0 ${borderWidth}px `,
    `0`
  ];
  const paraVariations = [
    `${borderWidth}px 0 ${borderWidth}px 0`,
    `0 ${borderWidth}px 0 ${borderWidth}px`,
    `${borderWidth}px 0 ${borderWidth}px 0`,
    `0 ${borderWidth}px 0 ${borderWidth}px`,
    `0`
  ];
  const cornerVariations = [
    //sth not right here
    `${borderWidth}px ${borderWidth}px 0 0`,
    `0 ${borderWidth}px ${borderWidth} px 0`,
    `0 0 ${borderWidth}px ${borderWidth}px`,
    `${borderWidth}px 0 0 ${borderWidth}px`,
    `0`
  ];
  const openVariations = [
    `${borderWidth}px ${borderWidth}px ${borderWidth}px 0`,
    `${borderWidth}px ${borderWidth}px 0 ${borderWidth}px`,
    `${borderWidth}px 0 ${borderWidth}px ${borderWidth}px`,
    `0 ${borderWidth}px ${borderWidth}px ${borderWidth}px`,
    `0`
  ];
  const fullVariations = [`${borderWidth}px `, `0`];
  ///change to select random based on arr length!!
  const randomNumber = Math.floor(Math.random() * Math.floor(4));
  //still need to apply dynamic selection
  const borderVariations = singleVariations;
  item.style.borderWidth = borderVariations[randomNumber];
  return item;
};

export default getGridElementStyle;
