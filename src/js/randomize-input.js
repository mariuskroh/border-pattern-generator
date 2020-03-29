export default function randomizeInput(factor, limit) {
  //think about this later, good for now
  // min needs to be 1 as default not zero
  let min = limit / factor;
  let max = limit;
  const value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
}
