export function findLongestWord(phrase) {
  let phraseSplit = phrase.split(' ');
  let letters = phraseSplit.reduce((acc, cur) => {
    if (cur.length > acc) {
      acc = cur.length;
    }
    return acc;
  }, 0);
  return letters;
}
