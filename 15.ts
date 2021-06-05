/*
Exercise #15
Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly(arr) {
  // your code here
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
*/
function fiveAndGreaterOnly(arr:number[]):number[] {
   return arr.filter(n=>n>5);//
  };
  // test
  console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
