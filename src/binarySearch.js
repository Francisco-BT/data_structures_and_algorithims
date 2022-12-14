const chalk = require('chalk');
const array = [2, 45, 59, 89, 90, 99, 142, 143];

const binarySearch = (array, value) => {
  let upperBound = array.length - 1;
  let lowerBound = 0;

  while (lowerBound <= upperBound) {
    const middle = Math.ceil((upperBound + lowerBound) / 2);

    if (array[middle] === value) {
      return middle;
    }

    if (array[middle] < value) {
      lowerBound = middle + 1;
    }

    if (array[middle] > value) {
      upperBound = middle - 1;
    }
  }

  return undefined;
};

const valuesToSearch = [1, 10, 90, 100, 1000, 2, 59, -1, 142];

valuesToSearch.forEach((value) => {
  const index = binarySearch(array, value);
  if (index !== undefined) {
    console.log(chalk.green(`Index of ${value} is ${index}`));
  } else {
    console.log(chalk.red(`Value ${value} is not found in the array`));
  }
});

const binarySearchRecursive = (array, value) => {
  const iteration = (lower = 0, upper = array.length) => {
    if (lower >= upper) {
      return undefined;
    }

    const middle = Math.ceil((upper + lower) / 2);
    const middleValue = array[middle];

    if (value === middleValue) {
      return middle;
    }

    if (value < middleValue) {
      return iteration(lower, middle - 1);
    }

    if (value > middleValue) {
      return iteration(middle + 1, upper);
    }
  };

  return iteration();
};

console.log(chalk.yellowBright('\nUsing binary search recursive version'));

valuesToSearch.forEach((value) => {
  const index = binarySearchRecursive(array, value);
  if (index !== undefined) {
    console.log(chalk.green(`Index of ${value} is ${index}`));
  } else {
    console.log(chalk.red(`Value ${value} is not found in the array`));
  }
});
