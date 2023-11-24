export function arrayLeaders(array) {
  let newArr = [];

  array.forEach((num, i, arr) => {
    let sum = arr.slice(i + 1).reduce((acc, cur) => acc + cur, 0);

    if (num > sum) {
      newArr.push(num);
    }
  });
  return newArr;
}

// THROUGH THE FILTER
// export function arrayLeaders(numbers) {
//   let filteredLeaders = numbers.filter((numberToFilter, index) => {
//     let rightSum = numbers.slice(index + 1).reduce((acc, cur) => {
//       return acc + cur;
//     }, 0);
//     return numberToFilter > rightSum;
//   });
//   return filteredLeaders;
// }
