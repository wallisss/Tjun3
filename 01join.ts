/* 
Input: Array of elements

["h", "o", "l", "a"];
Output: String with comma delimited elements of the array in the same order.

"h,o,l,a";
*/


const arr = ["h", "o", "l", "a"];
//https://www.tutorialspoint.com/typescript/typescript_array_join.htm
console.log("arr.join() : " + arr.join());
console.log(`arr.join() :${arr.join()}`);
console.log("arr.join(", ") : " + arr.join(", "));
console.log("arr.join(" + ") : " + arr.join(" + "));


//https://www.tutorialspoint.com/typescript/typescript_array_tostring.htm
console.log("arr.toString(): " + arr.toString());