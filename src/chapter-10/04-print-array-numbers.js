/**
 * Recursive function that prints all the numbers and just the numbers in an array
 * that can cotains numbers or other arrays of numbers
 * @param {Array<Array<number>|number>} array
 */
function printNumbers(array) {
  for (const item of array) {
    if (Array.isArray(item)) {
      printNumbers(item);
    } else {
      console.log(item);
    }
  }
}

const array = [
  1,
  2,
  3,
  [4, 5, 6],
  7,
  [8, [9, 10, 11, [12, 13, 14]]],
  [15, 16, 17, 18, 19, [20, 21, 22, [23, 24, 25, [26, 27, 29]], 30, 31], 32],
  33,
];

printNumbers(array);
