/* 
Exercise #2
Make an array of numbers that are doubles of the first array.

function doubleNumbers(arr) {
  // your code here
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
*/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


function doubleNumbers(arr:number[]):number[] {
    return arr.map(x=>x*2);
  };
  console.log(doubleNumbers([2, 5, 100]))
