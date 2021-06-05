/*Exercise #8
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example:

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]. */
//https://dev.to/aspittel/comment/6god

function countPositivesSumNegatives(input) {
    return (input && input.length >= 1)
        ? input.reduce((acc, n) => {
            n > 0 ? acc[0]++ : acc[1] += n;
            return acc;
        }, [0, 0])
        : [];
};
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));