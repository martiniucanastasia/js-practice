export function uniqueInOrder(elements) {
  let splited;
  let result = [];

  typeof elements === 'string' ? (splited = elements.split('')) : (splited = elements);

  splited.forEach((el, index, arr) => {
    if (arr[index] !== arr[index + 1]) {
      result.push(el);
    }
  });
  return result;
}
