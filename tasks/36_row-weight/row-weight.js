export function rowWeights(arr) {
  let teams = [0, 0];

  arr.forEach((num, index) => {
    if (index % 2 === 0) {
      teams[0] += num;
    } else {
      teams[1] += num;
    }
  });
  return teams;
}
