export function confirmEnding(str, target) {
  let neededStr = '';
  neededStr = str.substring(str.length - target.length);
  return neededStr === target;
}
