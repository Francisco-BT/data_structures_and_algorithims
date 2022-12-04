/**
 * Unique paths version with memoization
 * @param {number} rows
 * @param {number} columns
 */
function uniquePaths(rows, columns) {
  const memo = {};

  const memoization = (rows, columns) => {
    if (rows === 1 || columns === 1) {
      return 1;
    }
    if (!memo[`${rows}-${columns}`]) {
      memo[`${rows}-${columns}`] =
        memoization(rows - 1, columns) + memoization(rows, columns - 1);
    }

    return memo[`${rows}-${columns}`];
  };

  return memoization(rows, columns);
}

console.log(uniquePaths(3, 5));
