// Get greatest number af an array in O(N)
function greatestNumber(array) {
  let greatest = array[0];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > greatest) {
      greatest = array[i];
    }
  }

  return greatest;
}

console.log(
  `input: ${[5, 54, 1, 52, 100]}, output: ${greatestNumber([
    5, 54, 1, 52, 100,
  ])}`
);
