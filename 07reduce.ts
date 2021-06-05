/* Exercise #7
You get an array of numbers, return the sum of all of the positives ones.

Example:

[1, -4, 7, 12]; // => 1 + 7 + 12 = 20 */

//https://github.com/EQuimper/CodeChallenge/blob/master/javascript/CodeWars/Sum%20of%20positive.md

const arrOfNum = [1, -4, 7, 12];
function positiveSum(arr: number[]): number {
    return arr.reduce((prev, current) => {
        if (current > 0) {
            return prev + current;
        }

        return prev
    }, 0)
};
console.log(positiveSum(arrOfNum));

