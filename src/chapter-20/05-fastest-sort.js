const temperatures = [
  98.6, 98.0, 97.1, 99.0, 98.9, 97.8, 98.5, 98.2, 98.0, 97.1,
];

/**
 * Exercise 5. Write a function that sorts from lowest to highest in O(N) time complexity
 * @param {Array<number>} array
 * @returns {Array<number>}
 */
function sortTemperatures(array) {
  const hashTable = {};

  array.forEach((temperature) => {
    if (hashTable[temperature]) {
      hashTable[temperature.toFixed(1)] += 1;
    } else {
      hashTable[temperature.toFixed(1)] = 1;
    }
  });

  const sortedArray = [];

  let currentTemperature = 970; // Avoid floating-point math errors

  while (currentTemperature <= 990) {
    const temperatureValue = (currentTemperature / 10.0).toFixed(1);
    const temperatureTimes = hashTable[temperatureValue];
    if (temperatureTimes) {
      for (let index = 0; index < temperatureTimes; index++) {
        sortedArray.push(temperatureValue);
      }
    }
    currentTemperature += 1;
  }

  return sortedArray;
}

console.log(sortTemperatures(temperatures));
