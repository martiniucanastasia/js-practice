export function firstNSmallest(array, num) {
  while (array.length !== num) {
    let largestNum = array.lastIndexOf(Math.max(...array));
    array.splice(largestNum, 1);
  }
  return array;
}
