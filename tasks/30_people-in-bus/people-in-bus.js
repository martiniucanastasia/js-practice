export function peopleInBus(array) {
  let reduced = array.reduce((acc, cur) => {
    return acc + cur[0] - cur[1];
  }, 0);
  return reduced;
}
