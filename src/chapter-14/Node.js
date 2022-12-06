class Node {
  _nextNode;
  _data;
  _prevNode;

  constructor(data, nextNode, prevNode) {
    this._data = data;
    this._nextNode = nextNode;
    this._prevNode = prevNode;
  }

  setData(data) {
    this._data = data;
  }

  setNext(node) {
    this._nextNode = node;
  }

  setPrev(node) {
    this._prevNode = node;
  }

  get next() {
    return this._nextNode;
  }

  get prev() {
    return this._prevNode;
  }

  get data() {
    return this._data;
  }

  toString() {
    return {
      value: this.data,
      next: Boolean(this.next),
      prev: Boolean(this.prev),
    };
  }
}

module.exports = Node;
