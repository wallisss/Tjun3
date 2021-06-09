/*
## Exercise #6

Make an array of the names in `h1`s, and the ages in `h2`s.

```javascript
function readyToPutInTheDOM(arr) {
  // your code here
}
console.log(
  readyToPutInTheDOM([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]

// https://stackoverflow.com/questions/55998398/make-an-array-of-the-names-in-h1-h1-and-the-ages-in-h2-h2
```

*/
function namesOnly(arr) {
    return arr.map(({name, age}) => `<h1>${name}</h1><h2>${age}</h2>`);
    
 };
 console.log(
 namesOnly([
   {
     name: "Angelina Jolie",
     age: 80
   },
   {
     name: "Eric Jones",
     age: 2
   },
   {
     name: "Paris Hilton",
     age: 5
   },
   {
     name: "Kayne West",
     age: 16
   },
   {
     name: "Bob Ziroll",
     age: 100
   }
 ]));