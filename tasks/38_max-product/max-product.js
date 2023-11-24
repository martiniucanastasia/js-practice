export function maxProduct(array) {
  let pairs = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1]) {
      pairs.push(array[i] * array[i + 1]);
    }
  }
  return Math.max(...pairs);
}
