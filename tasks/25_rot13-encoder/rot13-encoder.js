export function rot13Encoder(input) {
  let output = input.split('').map((letter) => {
    let inputLetterCode = letter.toUpperCase().charCodeAt();

    if (inputLetterCode < 65 || inputLetterCode > 90) {
      return letter;
    } else if (inputLetterCode < 77) {
      return String.fromCharCode(inputLetterCode + 13);
    } else {
      return String.fromCharCode(inputLetterCode - 13);
    }
  });
  return output.join('');
}
