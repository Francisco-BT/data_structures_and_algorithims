/**
 * Find a greatest number in O(N^2) speed
 * @param {Array<number>e} array
 * @returns {number}
 */
function greatestNumberONSquare(array) {
  let greatest = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    for (let j = 0; j < array.length; j++) {
      const compare = array[j];
      if (element < compare) {
        greatest = compare;
      }
    }
  }

  return greatest;
}

// Find the greatest number in O(N log N) speed
function greatestNumberNlogN(array) {
  const sorted = array.sort((a, b) => (a < b ? -1 : 1));

  return sorted[sorted.length - 1];
}

// Find the greatest number in O(N) speed
function greatestNumberN(array) {
  let greatest = array[0];

  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    if (greatest < element) {
      greatest = element;
    }
  }

  return greatest;
}

const input = [1, 5, 2, 3, 6, 9];
console.log("O(N^2): ", greatestNumberONSquare(input));
console.log("O(N logN): ", greatestNumberNlogN(input));
console.log("O(N): ", greatestNumberN(input));
