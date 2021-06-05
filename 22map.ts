/*
Exercise #22
Write a new function called swapCase that takes a string of words and capitalizes every second word starting from the first one.


30d Challenge | 03.11  https://www.youtube.com/watch?v=EQUS7yNKEfg&t=568s
*/
const swapCase = function (text: string):string {
    return text
        .split(' ') //string to array
        .map(       //
            (value, index) => (index % 2 == 0) ?//1||2 odd || even
                value.toUpperCase() :
                value.toLowerCase()
        ).join(' ')
};

console.log(swapCase("hey gurl, lets javascript together sometime")); // => "HEY gurl, LETS javascript TOGETHER sometime"
  // Driver code
  let arrajs = [2, 5, 6, 3, 8, 9];
 
  // use of map() method   

  let newArr = arrajs.map(function(val, index){

    // printing element
    console.log("key : ",index, "value : ",val*val);
  });
   // Driver code
   var arri:number[] = [ 11, 89, 23, 7, 98 ];
 
   // use of map() method
   var vale = arri.map(Math.log)
     
   // printing element
   console.log( vale );
   console.log( typeof(vale) );
