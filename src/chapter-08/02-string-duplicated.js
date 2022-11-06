/**
 * Create a function that returns the first duplicated value it finds
 * in a O(N) time complexity
 * @param {Array<string>} array
 */
function duplicatedString(array) {
  const valuesDictionary = {};
  for (let i = 0; i < array.length; i++) {
    const str = array[i];
    if (!valuesDictionary[str]) {
      valuesDictionary[str] = true;
    } else {
      return str;
    }
  }

  return null;
}

const a = ["a", "b", "c", "d", "c", "e"];
console.log(`first duplicated string in ${a} is ${duplicatedString(a)}`);
