const Node = require("./Node");

class DoubleLinkedList {
  constructor(firstNode = null, lastNode = null) {
    this.firstNode = firstNode;
    this.lastNode = lastNode;
  }

  insertAtEnd(value) {
    const newNode = new Node(value);

    if (!this.firstNode) {
      this.firstNode = newNode;
      this.lastNode = newNode;
    } else {
      newNode.setPrev(this.lastNode);
      this.lastNode.setNext(newNode);
      this.lastNode = newNode;
    }
  }

  removeFromFront() {
    const nodeToRemove = this.firstNode;
    this.firstNode = this.firstNode.next;
    return nodeToRemove;
  }

  /**
   * Exercise 2 - Add a method that prints all the elements of the list in
   * reverse order
   * @returns {string}
   */
  printReverse() {
    let result = "";

    let current = this.lastNode;
    while (current) {
      result += `${current.data} `;
      current = current.prev;
    }

    return result;
  }
}

const list = new DoubleLinkedList();
list.insertAtEnd(1);
list.insertAtEnd(2);
list.insertAtEnd(3);

console.log("doubled linked list: ", list.printReverse());
