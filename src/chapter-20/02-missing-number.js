const array1 = [2, 3, 0, 6, 1, 5];
const array2 = [8, 2, 3, 9, 4, 7, 5, 0, 6];

/**
 * Exercise 2. Write a function that accepts an array of distinct integers and
 * returns the missing number in the sequence. The function should runs in O(N)
 * @param {Array<number>} array
 * @returns {number}
 */
function missingNumber(array) {
  let fullSum = 0;
  let currentSum = 0;

  for (let index = 1; index <= array.length; index++) {
    fullSum += index;
  }

  for (let index = 0; index < array.length; index++) {
    currentSum += array[index];
  }

  return fullSum - currentSum;
}

console.log(`[${array1}] missing number is `, missingNumber(array1));
console.log(`[${array2}] missing number is `, missingNumber(array2));
