function containsX(string) {
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === "X") {
      return true;
    }
  }

  return false;
}

const a = "hello";
console.log(`${a} contains x? ${containsX(a)}`);

const b = "spaceX";
console.log(`${b} contains x? ${containsX(b)}`);
