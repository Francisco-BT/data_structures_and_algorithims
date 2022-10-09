function insertionSort(array) {
  for (let i = 0; i < array.length - 1; i += 1) {
    let tempIndex = i + 1;
    const temp = array[tempIndex];

    while (temp < array[tempIndex - 1]) {
      array[tempIndex] = array[tempIndex - 1];
      tempIndex--;
    }
    array[tempIndex] = temp;
    // console.log(`for ${temp}: `, array); // uncomment to see array after each pass-throughs
  }

  return array;
}

console.log(insertionSort([4, 2, 7, 1, 3]));
