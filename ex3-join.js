/*## Exercise #3

Take an array of numbers and make them strings.

```javascript
function stringItUp(arr) {
  // your code here
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
```*/
function stringItUp(arr) {
  return arr.join();
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
