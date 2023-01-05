const array1 = [10, 5, 12, 3, 55, 30, 4, 11, 2];
const array2 = [19, 13, 15, 12, 18, 14, 17, 11];

/**
 * Exercise 6. Write a function that accepts an array of integers and returns
 * the length of the longest consecutive sequence among them. In a O(N) time
 * @param {Array<number>} array
 * @returns {number}
 */
function longestConsecutiveSequence(array) {
  const hashTable = {};
  array.forEach((number) => (hashTable[number] = true));

  let longestSequence = 0;
  array.forEach((number) => {
    let currentSequence = 0;
    while (hashTable[number]) {
      currentSequence += 1;
      number++;
    }

    if (currentSequence > longestSequence) {
      longestSequence = currentSequence;
    }
  });

  return longestSequence;
}

console.log(
  `longest sequence of [${array1}] is `,
  longestConsecutiveSequence(array1)
);
console.log(
  `longest sequence of [${array2}] is `,
  longestConsecutiveSequence(array2)
);
