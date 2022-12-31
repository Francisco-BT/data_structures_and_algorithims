const array = [2, 1, 3, 5];

const bubbleSort = (array) => {
  let unsortedUntilIndex = array.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < unsortedUntilIndex; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sorted = false;
      }
    }
    console.log(array);
    unsortedUntilIndex -= 1;
  }

  return array;
};

// console.log('bubbleSort: ', bubbleSort(array));
console.log(
  `input: ${[4, 2, 7, 1, 3]}, output: ${bubbleSort([4, 2, 7, 1, 3])}`
);
