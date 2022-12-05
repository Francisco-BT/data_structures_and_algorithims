/**
 * Write a function that returns the greatest product of any three numbers,
 * Use sorting to implement the function in a way that it computes
 * O(N log N) speed.
 * @param {Array<number>} array
 * @returns {number}
 */
function greatestProduct(array) {
  const sortedArray = array.sort((a, b) => (a < b ? -1 : 1));

  const arrayLength = sortedArray.length;
  const bestProduct =
    sortedArray[arrayLength - 1] *
    sortedArray[arrayLength - 2] *
    sortedArray[arrayLength - 3];

  return bestProduct;
}

const input = [1, 3, 3, 5, 2];
console.log(greatestProduct(input));
