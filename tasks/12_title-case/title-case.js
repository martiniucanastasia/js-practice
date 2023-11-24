export function titleCase(phrase) {
  let lowerCaseSentence = phrase.toLowerCase();
  let splitSentence = lowerCaseSentence.split(' ');
  let mapped = splitSentence.map((el) => {
    return el.charAt(0).toUpperCase() + el.slice(1);
  });

  return mapped.join(' ');
}
