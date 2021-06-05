/*Exercise #9
Complete the square sum function so that it squares each number passed into it and then sums the results together.

Example:

[1, 2, 2]; // => 1^2 + 2^2 + 2^2 = 9.
*/
/* const squareSum = array => array.map(item => item * item).reduce((a, c) => a + c);
https://gist.github.com/itsjoseantonio/6cb124c906e1d6c6da5883b25c0be18a
*/
function squareSum(numbers: any[]) {
  let sum = 0
  numbers.forEach( (number: number) => {
      sum += (number * number)
  })
  console.log(sum);
};
squareSum([1, 2, 2]);

