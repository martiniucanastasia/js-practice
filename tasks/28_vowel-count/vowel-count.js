export function vowelCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = str.split('').reduce((acc, cur) => {
    if (vowels.includes(cur)) {
      acc++;
    }
    return acc;
  }, 0);
  return count;
}
