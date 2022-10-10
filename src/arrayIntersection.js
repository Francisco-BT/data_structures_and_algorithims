const a = [3, 1, 4, 2];
const b = [4, 5, 3, 6];

function interserction(firstArray, secondArray) {
  let steps = 0;

  const result = [];
  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      steps++;
      if (firstArray[i] === secondArray[j]) {
        result.push(firstArray[i]);
        break;
      }
    }
  }

  console.log(`Total steps: ${steps}`);
  return result;
}

console.log(interserction(a, b));
