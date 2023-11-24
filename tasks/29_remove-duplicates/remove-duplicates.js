export function removeDuplicates(array) {
  // USING SET

  // let set = new Set([...array]);
  // let unique = Array.from(set);
  // return unique;

  // USING .REDUCE

  let length = array.length;
  if (length < 1) {
    return [];
  }

  let newArr = array.reduce((a, b) => {
    if (!a.includes(b)) a.push(b);
    return a;
  }, []);
  return newArr;
}
