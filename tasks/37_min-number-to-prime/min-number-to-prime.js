export function minNumberToPrime(array) {
  let sum = array.reduce((acc, cur) => (acc += cur), 0);

  if (sum <= 1) {
    return 2;
  }

  let minimumNumberInserted = 0;
  let found = false;

  while (!found) {
    if (isPrime(sum)) {
      found = true;
    } else {
      sum++;
      minimumNumberInserted++;
    }
  }
  return minimumNumberInserted;
}

// Function from Web
function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 == 0 || number % 3 == 0) return false;
  for (var i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}
