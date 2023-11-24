export function indexToInsert(array, value) {
  array.push(value);
  let sorted = array.sort((a, b) => a - b);
  return sorted.indexOf(value);
}
