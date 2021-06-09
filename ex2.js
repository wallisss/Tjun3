/*## Exercise #2

Make an array of numbers that are doubles of the first array.
made operation of each element of array

function doubleNumbers(arr) {
  // your code here
}
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
```
https://stackoverflow.com/questions/31644673/how-to-double-numbers-in-an-array-and-save-it-in-a-new-array/31644696
*/
function doubleNumbers(arr) {
    // your code here
    let outputArray=Array.from(arr,x=>x*2);
    return outputArray;
  }
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]