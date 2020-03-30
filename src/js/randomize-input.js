export default function randomizeInput(rand, property) {
  // think about this later, good for now

  // approach 1
  // let min = property / rand;
  // let max = property;
  // const value = Math.floor(Math.random() * (max - min + 1) + min);

  // approach 2 - let's see if this is more interesting...
  let possibleValues = [property];
  for (let i = 0; i < rand; i++) {
    possibleValues.push(0);
  }
  const getRandomNumber = Math.floor(Math.random() * Math.floor(rand));
  let value = possibleValues[getRandomNumber];

  return value;
}
