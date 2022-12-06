const Node = require("./Node");

class LinkedList {
  firstNode;

  constructor(node) {
    this.firstNode = node;
  }

  read(index) {
    let node = this.firstNode;
    let currentIndex = 0;
    while (currentIndex < index - 1) {
      node = node.next;
      currentIndex += 1;
    }

    return node;
  }

  indexOf(value) {
    let currentIndex = 0;
    let current = this.firstNode;

    while (current) {
      if (current.data === value) {
        return currentIndex;
      }

      current = current.next;
      currentIndex += 1;
    }

    return null;
  }

  insertAt(index, value) {
    const newNode = new Node(value);

    if (index === 0) {
      newNode.setNext(this.firstNode);
      this.firstNode = newNode;
      return newNode;
    }

    const node = this.read(index);
    node.setNext(newNode);

    return newNode;
  }

  deletedAt(index) {
    if (index === 0) {
      this.firstNode = this.firstNode.next;
      return this.firstNode;
    }

    let node = this.read(index);
    let next = node.next;
    node.setNext(next.next);

    return node;
  }

  /**
   * Exercise 1. Add a method that prints all the elements of LinkedList
   * @returns
   */
  print() {
    let result = "";
    let currentNode = this.firstNode;

    while (currentNode) {
      result += `${currentNode.data} ${currentNode.next ? "=> " : ""}`;
      currentNode = currentNode.next;
    }
    return result;
  }

  /**
   * Exercise 3. Add a method that returns the last element from the list.
   * Assume you don't know how many elements are in the list
   */
  lastElement() {
    let current = this.firstNode;

    while (current.next) {
      current = current.next;
    }

    return current;
  }

  /**
   * Exercise 4. Add a method that reverse the list
   */
  reverse() {
    let previous = null;
    let current = this.firstNode;

    while (current) {
      let next = current.next;

      current.setNext(previous);
      previous = current;
      current = next;
    }

    this.firstNode = previous;
  }

  /**
   * Exercise 5. Write a function tha remove a node from the list
   * @param {*} node
   */
  deleteMiddle(node) {
    node.setData(node.next.data);
    node.setNext(node.next.next);
  }
}

module.exports = LinkedList;

const list = new LinkedList(new Node("0"));
list.insertAt(1, "1");
list.insertAt(2, "2");
list.insertAt(3, "3");
list.insertAt(4, "4");

console.log("linked list: ", list.print());
console.log("node at 3: ", list.read(3).toString());
console.log("node with value 2: ", list.indexOf(2));
console.log("node with value '2': ", list.indexOf("2"));

list.deletedAt(3);
console.log("after delete index 3", list.print());
list.deletedAt(1);
console.log("after delete index 1", list.print());
// list.deletedAt(0);
// console.log("after delete index 0", list.print());

list.insertAt(3, "10");
console.log("list is: ", list.print());
console.log("last element is: ", list.lastElement(``));

list.reverse();
console.log("after reverse the list: ", list.print());

const nodeAt2 = list.read(2);
list.deleteMiddle(nodeAt2);
console.log("after deleted at middle: ", list.print());
