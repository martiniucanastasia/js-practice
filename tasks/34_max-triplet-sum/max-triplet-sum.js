export function maxTripletSum(array) {
  let newArr = new Set(array);
  let sorted = [...newArr].sort((a, b) => b - a).slice(0, 3);
  return sorted.reduce((a, b) => a + b, 0);
}
