export function reverseStringInRange(input, [rangeStart, rangeEnd]) {
  let beginning = input.slice(0, rangeStart);
  let neededPartInside = input
    .slice(rangeStart, rangeEnd + 1)
    .split('')
    .reverse()
    .join('');
  let output = beginning + neededPartInside + input.slice(rangeEnd + 1);
  return output;
}
