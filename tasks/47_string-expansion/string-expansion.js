export function stringExpansion(input) {
  let split = input.split('');
  let numbers = '1234567890';
  let multiplier = 1;
  let finalString = '';

  split.forEach((character) => {
    if (numbers.includes(character)) {
      multiplier = parseInt(character);
    } else {
      for (let i = 1; i <= multiplier; i++) {
        finalString += character;
      }
    }
  });

  return finalString;
}
