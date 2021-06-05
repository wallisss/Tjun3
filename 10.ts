/*Exercise #10
Write a method, that will get an integer array as parameter and will process every number from this array. Return a new array with
 processing every number of the input-array like this:

[4, 3, 9, 7, 2, 1]; // => [2,9,3,49,4,1]
If the number has an integer square root, take this, otherwise square the number.

The input array should not be modified!*/
const numbers = [4, 3, 9, 7, 2, 1];
const half = numbers.map(n => n /2);

console.log(half);
