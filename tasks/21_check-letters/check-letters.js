export function checkLetters(array) {
  let target = array[0].toLowerCase().split('');
  let search = array[1].toLowerCase().split('');

  for (let i = 0; i < search.length; i++) {
    let neededLetters = target.indexOf(search[i]);
    if (neededLetters === -1) {
      return false;
    }
  }
  return true;
}
