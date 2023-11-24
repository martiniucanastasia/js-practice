export function sortByBits(arr) {
  let sorted = arr.sort((a, b) => {
    return countBits(a) - countBits(b) || a - b;
  });
  return sorted;
}

function countBits(number) {
  let bitsOfNumber = number.toString(2);
  let arrayOfBits = [...bitsOfNumber];
  let amountOfBits = arrayOfBits.reduce((acc, cur) => {
    if (cur === '1') {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  return amountOfBits;
}
