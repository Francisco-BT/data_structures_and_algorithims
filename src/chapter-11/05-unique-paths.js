/**
 * Write a function that accepts a number of rows and a number of
 * columns, and calculates the number of possible "shortest" paths
 * from the upper-leftmost square to the lower-rightmost square
 * @param {number} rows
 * @param {number} columns
 * @returns {number}
 */
function uniquePaths(rows, columns) {
  if (rows === 1 || columns === 1) {
    return 1;
  }

  return uniquePaths(rows - 1, columns) + uniquePaths(rows, columns - 1);
}

console.log(uniquePaths(3, 7));
