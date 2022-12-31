class WeightedGraphVertex {
  value;
  adjacentVertices;

  constructor(value) {
    this.value = value;
    this.adjacentVertices = {};
  }

  /**
   *
   * @param {WeightedGraphVertex} vertex
   * @param {number} weight
   */
  addAdjacentVertex(vertex, weight) {
    this.addAdjacentVertex[vertex] = weight;
  }
}

const dallas = new WeightedGraphVertex("Dallas");
const toronto = new WeightedGraphVertex("Toronto");

dallas.addAdjacentVertex(toronto, 138);
toronto.addAdjacentVertex(dallas, 216);
