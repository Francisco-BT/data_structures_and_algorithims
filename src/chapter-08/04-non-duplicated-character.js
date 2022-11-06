/**
 * Returns the first non-duplicated character in a string
 * with a O(N) time complexity
 * @param {string} str
 */
function nonDuplicatedCharacter(str) {
  const dictionary = {};

  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (dictionary[element]) {
      dictionary[element]++;
    } else {
      dictionary[element] = 1;
    }
  }

  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (dictionary[element] === 1) {
      return element;
    }
  }
}

const str = "minimum";
console.log(`non-duplicated of ${str} is ${nonDuplicatedCharacter(str)}`);
