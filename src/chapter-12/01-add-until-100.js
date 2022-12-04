/**
 *
 * @param {Array<number>} array
 */
function addUntil100(array) {
  if (array.length === 0) {
    return 0;
  }

  const sumOfRemainingNumbers = addUntil100(array.slice(1));
  if (array[0] + sumOfRemainingNumbers > 100) {
    return sumOfRemainingNumbers;
  }
  return array[0] + sumOfRemainingNumbers;
}

const input = [1, 2, 3, 50, 30, 20];

console.log(addUntil100(input));
