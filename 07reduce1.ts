//https://prosenjs.blogspot.com/2017/04/sum-of-positive-code-wars-problem.html
function posSum(arr:number[]):number {
    return !arr.length ? 0 //arr.length=0->if(0)->false=>!arr.length->true
    : arr.reduce((res,x) => x > 0 ? res+x :res,0);
  };
const array = [1, -4, 7, 12];
console.log(posSum(array));
//https://www.freecodecamp.org/news/check-if-javascript-array-is-empty-or-not-with-length/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
