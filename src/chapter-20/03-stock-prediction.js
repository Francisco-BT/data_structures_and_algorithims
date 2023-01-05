const array = [10, 7, 5, 8, 11, 2, 6];

/**
 * Exercises 3. Your function should calculate the greatest profit that could be
 * made from a single buy transaction followed by a single sell transaction from
 * an array of stocks in a O(N) time complexity
 * @param {Array<number>} array
 * @returns {number}
 */
function greatestProfit(array) {
  let buyPrice = array[0];
  greatestProfit = 0;

  array.forEach((price) => {
    const potentialProfit = price - buyPrice;

    if (price < buyPrice) {
      buyPrice = price;
    } else if (potentialProfit > greatestProfit) {
      greatestProfit = potentialProfit;
    }
  });

  return greatestProfit;
}

console.log(`[${array}] greatest profit is: `, greatestProfit(array));
