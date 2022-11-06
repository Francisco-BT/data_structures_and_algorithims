class Stack {
  constructor() {
    this.stack = [];
  }

  pop() {
    return this.stack.pop();
  }

  push(element) {
    this.stack.push(element);
  }

  read() {
    return this.stack[this.stack.length - 1];
  }

  empty() {
    return this.stack.length === 0;
  }
}

/**
 * Reverse a string using a stack data structure
 * @param {string} str
 */
function reverseString(str) {
  const stack = new Stack();
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    stack.push(element);
  }

  let result = "";
  while (!stack.empty()) {
    result += stack.pop();
  }
  return result;
}

const str = "abcde";
console.log(`reverse of "${str}" is "${reverseString(str)}"`);
