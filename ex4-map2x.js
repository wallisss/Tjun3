/*
## Exercise #4

Capitalize each of an array of names.

```javascript
function capitalizeNames(arr) {
  // your code here
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
```
  //const arr=["john", "JACOB", "jinGleHeimer", "schmidt"];  https://morioh.com/p/0b5bd0ececd4 
  // https://www.w3resource.com/javascript-exercises/javascript-function-exercise-5.php
  //https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/
*/
function capitalizeNames(arr) {
  // arr.lovercas
  const low=arr.map(function(v) {
    return v.toLowerCase();
  });
  const firstUpperCase=low.map(function (word){
    return word[0].toUpperCase() + word.substring(1); 
  });//.join(" ");
  
  return firstUpperCase;
};
  // first to uperr

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))