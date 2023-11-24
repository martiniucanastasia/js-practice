export function largestOfFour(arrays) {
  let largestNumArr = arrays.map((array) => Math.max(...array));
  return largestNumArr;
}
