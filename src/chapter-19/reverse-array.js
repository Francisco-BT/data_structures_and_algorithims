/**
 * Exercise 3. Create a new function to reverse an array that takes up
 * just O(1) extra spaces
 * @param {Array<any>} array
 */
function reverseArray(array) {
  for (let i = 0; i < array.length / 2; i++) {
    [array[i], array[array.length - 1 - i]] = [
      array[array.length - 1 - i],
      array[i],
    ];
  }

  return array;
}

console.log(reverseArray(["a", "b", "c", "d", "e"]));
console.log(reverseArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
