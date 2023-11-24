export function findNumbers(phrase) {
  let array = phrase.match(/\d+/g);
  let newArr = array.map((el) => parseInt(el));
  return newArr;
}
