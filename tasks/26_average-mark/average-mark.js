export function averageMark(array) {
  if (array.length > 0) {
    let sum = array.reduce((acc, cur) => acc + cur, 0);
    return Math.floor(sum / array.length);
  } else {
    return -1;
  }
}
