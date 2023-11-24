function factorialize(number) {
  let factorialSum = 1;
  for (let i = 1; i <= number; i++) {
    factorialSum *= i;
  }
  return factorialSum;
}

module.exports = {
  factorialize,
};
