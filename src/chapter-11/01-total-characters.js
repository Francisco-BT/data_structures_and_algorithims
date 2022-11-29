/**
 * Use a recursion to write a function that accepts an array of strings and
 * returns the total number of characters across all the strings.
 * @param {Array<string[]>} array
 * @returns {number}
 */
function characterCounter(array) {
  if (array.length === 0) {
    return 0;
  }

  return array[0].length + characterCounter(array.slice(1));
}

const input = ["ab", "c", "def", "ghij"];

console.log(characterCounter(input));
