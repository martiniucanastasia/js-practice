export function romanNumbersConvert(numberToConvert) {
  let convertedResult = '';

  // Legend of unique characters
  let romanNumbers = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  for (let i = 0; i < romanNumbers.length; i++) {
    // Check if numberToConvert is bigger or equal than current number
    while (numberToConvert >= arabicNumbers[i]) {
      // Write Roman representation of a number
      convertedResult = convertedResult + romanNumbers[i];
      // Subtract found portion, and start again
      numberToConvert = numberToConvert - arabicNumbers[i];
    }
  }
  return convertedResult;
}
