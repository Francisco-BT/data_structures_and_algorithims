/**
 * Returns missing letters from the alphabet for a given string
 * @param {string} str
 */
function missingAlphabetLetters(str) {
  const lettersDictionary = {};
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    lettersDictionary[element] = true;
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let index = 0; index < alphabet.length; index++) {
    const element = alphabet[index];
    if (!lettersDictionary[element]) {
      return element;
    }
  }

  return null;
}

console.log(
  missingAlphabetLetters("the quick brown box jumps over a lazy dog")
);
