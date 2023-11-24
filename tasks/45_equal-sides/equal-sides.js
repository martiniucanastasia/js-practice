export function equalSides(array) {
  var leftSum = 0;

  // Sum of all numbers in array
  var rightSum = array.reduce((acc, cur) => acc + cur, 0);

  for (let i = 0; i < array.length; i++) {
    rightSum = rightSum - array[i];

    if (i > 0) {
      leftSum = leftSum + array[i - 1];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}