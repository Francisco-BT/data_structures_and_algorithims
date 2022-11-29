/**
 * Use recursion to write a function that accepts a string and returns
 * the first index that contains the character "x"
 * @param {string} params
 */
function findX(string, index = 0) {
  if (string.length === 0) {
    return undefined;
  }

  if (string[0] === "x") {
    return index;
  }

  return findX(string.substring(1), index + 1);
}

const input = "abcdefghijklmnopqrstuvwxyz";
console.log(findX(input)); // 23
