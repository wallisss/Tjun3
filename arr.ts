//https://www.quora.com/How-do-you-access-an-array-in-an-object-in-JS

const numbers = [1, 2, 3, 4]; // Create an array of numbers. 
 
const first = numbers[0]; // Arrays are 0 based in JavaScript. 
const second = numbers["1"]; // Arrays indices are actually strings. 
 
// Append an element to the array. 
numbers[numbers.length] = 5; // Arrays resize as needed. 
// Append an element to the array in a more idiomatic style. 
numbers.push(6); // Arrays resize as needed. 
 
// Print the entire array as a value. 
console.log(numbers); // prints "[1, 2, 3, 4, 5, 6]" 
 
// Print the elements in the array, one per line. 
numbers.forEach(number => {  
  console.log(number); 
}); 
 
// Create a new array containing the square of each number in the original. 
const numbersSquared = numbers.map(number => number * number); 
 
// Print each number and its square, using a for loop. 
for (let i = 0; i < numbers.length && i < numbersSquared.length; i += 1) { 
  const number = numbers[i]; 
  const numberSquared = numbersSquared[i]; 
 
  console.log(number + ' squared is ' + numberSquared); 
} 
 
// Put them in an object. 
const numbersAndTheirSquares = { 
  numbers: numbers, 
  numbersSquared: numbersSquared 
}; 
 
// Access them via the object. 
numbersAndTheirSquares.numbers.forEach(number => { 
  console.log(number); 
}); 