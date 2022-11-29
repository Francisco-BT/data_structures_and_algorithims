/**
 * Write a recursive function that accepts a number for N and returns the
 * correct number from the triangular number series
 * @param {number} number
 * @returns {number}
 */
function triangularNumbers(number) {
  if (number === 1) {
    return 1;
  }

  return number + triangularNumbers(number - 1);
}

console.log(triangularNumbers(7)); // 28
