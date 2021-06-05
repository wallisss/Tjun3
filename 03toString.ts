/*
Exercise #3
Take an array of numbers and make them strings.

function stringItUp(arr) {
  // your code here
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

//https://www.tutorialspoint.com/typescript/typescript_array_tostring.htm
*/
function stringItUp1(arr) {
  return arr.toString();
};
console.log("var1:" + stringItUp1([2, 5, 100])); // ["2", "5", "100"]  

//"ver.30d Challenge03.09"
const stringItUp = (number: number[]): string[] =>
  number.map(it => it.toString());
console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

