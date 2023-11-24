export function runningAverage() {
  let numbers = [];
  return function (num) {
    numbers.push(num);
    let sum = numbers.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    return sum / numbers.length;
  };
}
