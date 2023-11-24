export function sumAllNumbersInRange(array) {
  let newArr = [];
  for (let i = Math.min(...array); i <= Math.max(...array); i++) {
    newArr.push(i);
  }
  return newArr.reduce((acc, cur) => (acc += cur), 0);
}
