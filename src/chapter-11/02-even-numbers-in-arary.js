/**
 * Use recursion to write a function that accepts an array of numbers and
 * returns a new array containing just the even numbers
 * @param {Array<number>} array
 * @returns {Array<number>}
 */
function evenNumbersInArray(array) {
  if (array.length === 0) {
    return [];
  }

  const rest = array.slice(1);
  if (array[0] % 2 === 0) {
    return [array[0], ...evenNumbersInArray(rest)];
  }

  return evenNumbersInArray(rest);
}

const input = [0, 1, 2, 3, 4, 5, 6];
console.log(evenNumbersInArray(input));
