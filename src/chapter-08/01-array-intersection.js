/**
 * Calulate the intersection of two arrays in a O(N) time complexity
 * @param {Array} larger
 * @param {Array} smaller
 */
function arrayIntersection(larger, smaller) {
  if (larger.length < smaller.length) {
    const temp = larger;
    larger = smaller;
    smaller = temp;
  }
  const largerIndex = arrayToDictionary(larger);

  return smaller.filter((item) => largerIndex[item]);
}

function arrayToDictionary(array) {
  return array.reduce((a, b) => {
    a[b] = true;
    return a;
  }, {});
}

const a = [1, 2, 3, 4, 5];
const b = [0, 2, 4, 6, 8];
console.log(
  `intersection of [${a}] and [${b}] is [${arrayIntersection(a, b)}]`
);
