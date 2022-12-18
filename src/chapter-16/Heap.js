class Heap {
  #data = [];
  constructor() {
    this.#data = [];
  }

  rootNode() {
    return this.#data.at(0);
  }

  lastNode() {
    return this.#data.at(this.#data.length - 1);
  }

  leftChildIndex(index) {
    return index * 2 + 1;
  }

  rightChildIndex(index) {
    return this.leftChildIndex(index) + 1;
  }

  parentIndex(index) {
    return (index - 1) / 2;
  }

  insert(value) {
    this.#data.push(value);

    let newIndex = this.#data.length;

    while (
      newIndex > 0 &&
      this.#data[newIndex] > this.#data[this.parentIndex(newIndex)]
    ) {
      [this.#data[this.parentIndex(newIndex)], this.#data[newIndex]] = [
        this.#data[newIndex],
        this.#data[this.parentIndex(newIndex)],
      ];

      newIndex = this.parentIndex(newIndex);
    }
  }

  delete() {
    this.#data[0] = this.#data.pop();
    let trickleIndex = 0;

    while (this.hasGreaterChild(trickleIndex)) {
      const largerChildIndex = this.calculateLargerChildIndex(trickleIndex);

      [this.#data[trickleIndex], this.#data[largerChildIndex]] = [
        this.#data[largerChildIndex],
        this.#data[trickleIndex],
      ];

      trickleIndex = largerChildIndex;
    }
  }

  hasGreaterChild(index) {
    const data = this.#data;
    return (
      (data[this.leftChildIndex(index)] &&
        data[this.leftChildIndex(index)] > data[index]) ||
      (data[this.rightChildIndex(index)] &&
        data[this.rightChildIndex(index) > data[index]])
    );
  }

  calculateLargerChildIndex(index) {
    const data = this.#data;
    if (!data[this.rightChildIndex(index)]) {
      return this.leftChildIndex(index);
    }

    if (data[this.rightChildIndex(index)] > data[this.leftChildIndex(index)]) {
      return this.rightChildIndex(index);
    } else {
      return this.leftChildIndex(index);
    }
  }

  print() {
    console.log(this.#data);
  }
}

const heap = new Heap();
heap.insert(25);
heap.insert(20);
heap.insert(10);
heap.insert(15);
heap.insert(8);

heap.print();
heap.delete();
heap.print();
