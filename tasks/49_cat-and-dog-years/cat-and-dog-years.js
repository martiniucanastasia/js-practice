export function catAndDogYears(years) {
  let catYears = 0;
  let dogYears = 0;

  for (let i = 0; i < years; i++) {
    if (i === 0) {
      dogYears += 15;
      catYears += 15;
    } else if (i === 1) {
      dogYears += 9;
      catYears += 9;
    } else {
      dogYears += 5;
      catYears += 4;
    }
  }

  return [years, catYears, dogYears];
}
