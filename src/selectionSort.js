function selectionSort(array) {
  let steps = 0;
  let arraySize = array.length;

  for (let i = 0; i < arraySize; i += 1) {
    let lowestIndex = i;
    for (let j = i + 1; j < arraySize; j += 1) {
      steps++;
      if (array[j] < array[lowestIndex]) {
        lowestIndex = j;
      }
    }

    if (lowestIndex !== i) {
      steps++;
      const temp = array[i];
      array[i] = array[lowestIndex];
      array[lowestIndex] = temp;
      console.log('array after swap: ', array);
    }
  }

  console.warn(`Total steps: ${steps}`);
  return array;
}

console.log(selectionSort([4, 0, 3, 1, 2]));
