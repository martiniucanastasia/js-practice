// import { monthsInterval } from './months-interval';

describe.skip('monthsInterval', () => {
  it('should handle case: Same month & year', () => {
    expect(monthsInterval(new Date(2017, 0, 1), new Date(2017, 0, 1))).toEqual(['January']);
  });

  it('should handle case: Same month, different year', () => {
    expect(monthsInterval(new Date(2016, 0, 1), new Date(2017, 0, 1))).toEqual([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]);
  });

  it('should handle case: Same month, different year (reversed)', () => {
    expect(monthsInterval(new Date(2017, 0, 1), new Date(2016, 0, 1))).toEqual([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]);
  });

  it('should handle case: Month interval same year', () => {
    expect(monthsInterval(new Date(2017, 3, 1), new Date(2017, 7, 1))).toEqual([
      'April',
      'May',
      'June',
      'July',
      'August',
    ]);
  });

  it('should handle case: Month interval same year (reversed)', () => {
    expect(monthsInterval(new Date(2017, 7, 1), new Date(2017, 3, 1))).toEqual([
      'April',
      'May',
      'June',
      'July',
      'August',
    ]);
  });

  it('should handle case: Month interval to different year', () => {
    expect(monthsInterval(new Date(2017, 11, 1), new Date(2018, 0, 1))).toEqual(['January', 'December']);
  });

  it('should handle case: Month interval to different year (reversed)', () => {
    expect(monthsInterval(new Date(2018, 0, 1), new Date(2017, 11, 1))).toEqual(['January', 'December']);
    expect(monthsInterval(new Date(2017, 3, 20), new Date(2017, 7, 1))).toEqual([
      'April',
      'May',
      'June',
      'July',
      'August',
    ]);
  });

  it('should handle case: 2 years interval', () => {
    expect(monthsInterval(new Date(2017, 3, 1), new Date(2019, 3, 1))).toEqual([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]);
  });

  it('should handle case: 2 years interval (reversed)', () => {
    expect(monthsInterval(new Date(2019, 3, 1), new Date(2017, 3, 1))).toEqual([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]);
  });

  it('should handle case: Mutliple years and months interval', () => {
    expect(monthsInterval(new Date(2017, 3, 1), new Date(2043, 9, 1))).toEqual([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]);
  });

  it('should handle case: Mutliple years and months interval (reversed)', () => {
    expect(monthsInterval(new Date(2043, 9, 1), new Date(2017, 3, 1))).toEqual([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]);
  });
});
