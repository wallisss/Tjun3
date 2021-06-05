/* Exercise #4
Capitalize each of an array of names.

function capitalizeNames(arr) {
  // your code here
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/
//https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/
//https://www.w3resource.com/javascript-exercises/javascript-function-exercise-5.php#:~:text=The%20toUpperCase()%20method%20is,new%20length%20of%20the%20array.
//https://stackoverflow.com/questions/50223536/capitalize-first-letters-of-string-in-an-array
function capitalizeNames(arr) {
    return arr.map(function (name) {
        return name.split(' ').map(function (word) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        });
    });
};
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));



//https://stackoverflow.com/questions/29719329/convert-array-into-upper-case/29719347
let array2 = ["john", "JACOB", "jinGleHeimer", "schmidt"];
array2 = array2.map(function (word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
});
console.log(array2);

//"ver.30d Challenge03.09"
const capitalizeNamesII=(names:string[]):string[]=> 
names.map(
    (word)=>word.charAt(0).toUpperCase() + word.toLowerCase().slice(1)
    );
console.log(capitalizeNamesII(["john", "JACOB", "jinGleHeimer", "schmidt"]));
