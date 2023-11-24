export function searchAndReplace(search, toReplace, newWord) {
  let splited = search.split(' ');
  for (let i = 0; i < search.length; i++) {
    if (toReplace === splited[i]) {
      search = search.replace(toReplace, newWord);
    }
    if (toReplace[0] === toReplace[0].toUpperCase()) {
      let firstLett = newWord[0].toUpperCase() + newWord.slice(1);
      search = search.replace(toReplace, firstLett);
    }
  }
  return search;
}
