export function arrayPlusArray(array1, array2) {
  let newArr = [];
  let maxArrayLength = Math.max(array2.length, array1.length);

  for (let i = 0; i < maxArrayLength; i++) {
    let sum = (array1[i] || 0) + (array2[i] || 0);
    newArr.push(sum);
  }
  return newArr;
}
