const array = [5, 11, -10, -6, 9, 4];

/**
 * Exercise 4. Write a function that accepts an array of numbers and computes the
 * highest product of any two numbers in the array. The function should runs in
 * a O(N) time complexity
 * @param {Array<number>} array
 * @returns {number}
 */
function greatestProduct(array) {
  let lowestNegative = array[0];
  let biggestPositive = array[0];
  let greatestProduct = 0;

  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    const greatestWithNegative = element * lowestNegative;
    const greatestWithPositive = element * biggestPositive;

    const biggestSoFar =
      greatestWithNegative > greatestWithPositive
        ? greatestWithNegative
        : greatestWithPositive;

    if (biggestSoFar > greatestProduct) {
      greatestProduct = biggestSoFar;
    }

    if (element < lowestNegative) {
      lowestNegative = element;
    }

    if (element > biggestPositive) {
      biggestPositive = element;
    }
  }

  return greatestProduct;
}

console.log(`greatest product in [${array}] is: `, greatestProduct(array));
const array2 = [-5, -4, -3, 0, 3, 4];
console.log(`greatest product in [${array2}] is: `, greatestProduct(array2));
const array3 = [0, 4, 6, -7, -4, -3];
console.log(`greatest product in [${array3}] is: `, greatestProduct(array3));
const array4 = [-9, -4, -3, 0, 6, 7];
console.log(`greatest product in [${array4}] is: `, greatestProduct(array4));
