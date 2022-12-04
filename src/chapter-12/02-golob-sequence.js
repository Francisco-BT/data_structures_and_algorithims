/**
 * Calculate the n number of the golob sequence
 * @param {number} n
 */
function golob(n) {
  const memo = {};
  function golobMemoization(n) {
    if (n === 1) {
      return n;
    }

    if (!memo[n]) {
      memo[n] =
        1 + golobMemoization(n - golobMemoization(golobMemoization(n - 1)));
    }
    return memo[n];
  }

  return golobMemoization(n);
}

console.log("with memoization: ", golob(5));
