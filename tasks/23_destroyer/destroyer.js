export function destroyer(arr) {
  let args = Array.from(arguments).slice(1, arr.length);
  return arr.filter((element) => args.indexOf(element) === -1);
}
