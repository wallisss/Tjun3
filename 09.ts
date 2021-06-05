/*Exercise #9
Complete the square sum function so that it squares each number passed into it and then sums the results together.

Example:

[1, 2, 2]; // => 1^2 + 2^2 + 2^2 = 9.
*/
/* const squareSum = array => array.map(item => item * item).reduce((a, c) => a + c);
https://gist.github.com/itsjoseantonio/6cb124c906e1d6c6da5883b25c0be18a

function squareSum(numbers){
  return numbers.reduce((res,n) => res+n*n,0);
 }
  
  console.log(squareSum([1, 2, 2]));
  // https://prosenjs.blogspot.com/2017/04/squaren-sum-code-wars-problem-solution.html

  function squareSum(numbers: any[]) {
  let sum = 0
  numbers.forEach( (number: number) => {
      sum += (number * number)
  })
  console.log(sum);
};
squareSum([1, 2, 2]);
}//https://losseff.xyz/katas/013-squeare-sum/javascript/
*/
function squareSum(numbers:any[]){
    const sqNum = numbers.map(num=>num*num);
    const addNum = sqNum.reduce((acc,curr)=> acc + curr);
    console.log( addNum )
  };
  
  squareSum([1, 2, 2]);
  // https://stackoverflow.com/questions/47568395/javascript-challenge-on-codewars-whats-wrong-with-my-solution/47568548

