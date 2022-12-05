/**
 *
 * @param {Array<number>} array
 * @returns {number|null}
 */
function missingNumber(array) {
  const sorted = array.sort((a, b) => (a < b ? -1 : 1));

  for (let index = 0; index < sorted.length; index++) {
    const element = sorted[index];

    if (element !== index) {
      return index;
    }
  }

  return null;
}

const input = [5, 2, 4, 1, 0];
console.log(missingNumber(input));
