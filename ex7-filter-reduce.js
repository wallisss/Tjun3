/*
## Exercise #7

You get an array of numbers, return the sum of all of the positives ones.

Example:

```javascript
[1, -4, 7, 12]; // => 1 + 7 + 12 = 20
```
//https://stackoverflow.com/questions/40227381/how-to-target-the-negative-numbers-from-an-array-to-get-the-sum-of-all-the-posi


*/
const array=[1, -4, 7, 12];
function SummPositive(array) {
    return array.filter(x => x>=0).reduce((a, c) => a + c, 0);
  };
  console.log(SummPositive(array));
