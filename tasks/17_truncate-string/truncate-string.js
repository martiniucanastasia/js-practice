export function truncateString(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }
  if (maxLength > 3) {
    str = str.substring(0, maxLength - 3) + '...';
    return str;
  } else {
    str = str.substring(0, maxLength) + '...';
    return str;
  }
}
