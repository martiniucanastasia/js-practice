### Get the months between two dates

> difficulty: `hard`

Create a function that, given 2 dates, returns the names of the months that are present between them (inclusive).

#### Input

```javascript
const date1 = new Date(2017, 0, 1);
const date2 = new Date(2017, 2, 1);

monthsInterval(date1, date2);
```

#### Output

```javascript
['January', 'February', 'March']
```

#### Input

```javascript
const date1 = new Date(2017, 11, 1);
const date2 = new Date(2018, 0, 1);

monthsInterval(date1, date2);
```

#### Output

```javascript
['January', 'December']
```

#### Input

```javascript
const date1 = new Date(2017, 0, 1);
const date2 = new Date(2018, 0, 1);

monthsInterval(date1, date2);
```

#### Output

```javascript
['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
```

#### Notes

* The returned array should include the months of `dateStart` and `dateEnd` (inclusive)
* The returned array **must not** include duplicate values
* The month names returned by the function should be sorted (not alphabetically, but ordered by which comes first (January = 1st month, February = 2nd month, … , December = 12th month))
* The function should produce the same output even if `dateStart` is greater than `dateEnd`
