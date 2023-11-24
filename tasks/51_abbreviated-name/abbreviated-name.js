export function abbreviatedName(name) {
  let abbrName = name.split(' ').map((el, index) => (index > 0 ? el[0] + '.' : el));
  return abbrName.join(' ');
}
