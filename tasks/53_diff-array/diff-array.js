export function diffArray(array1, array2) {
  let firstArrDiff = array1.filter((el) => !array2.includes(el));

  let secondArrDiff = array2.filter((el) => !array1.includes(el));

  return firstArrDiff.concat(secondArrDiff);
}
