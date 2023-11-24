export function bracketsIndexes(input, openIndexBracket) {
  let position = 0;

  if (input[openIndexBracket] != '(') {
    return -1;
  }

  for (let i = openIndexBracket; i < input.length; i++) {
    if (input[i] == '(') {
      position += 1;
    }

    if (input[i] == ')') {
      position -= 1;
    }

    if (position == 0) {
      return i;
    }
  }
}
