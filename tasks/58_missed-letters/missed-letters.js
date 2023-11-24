export function missedLetters(string) {
  // Start from beginning of input
  let missedLetter = string.charCodeAt(0); // 97

  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) !== missedLetter) {
      // If every letter is not the same as we need
      return String.fromCharCode(missedLetter);
    } else {
      // If next letter is needed (missing) letter
      missedLetter++;
    }
  }
}
