class Vertex {
  #value;
  #adjacentVertices;

  constructor(value) {
    this.#value = value;
    this.#adjacentVertices = [];
  }

  /**
   *
   * @param {Vertex} vertex
   * @returns
   */
  addAdjacentVertex(vertex) {
    this.#adjacentVertices.push(vertex);
    // for undirected graph
    // if (this.#adjacentVertices.includes(vertex)) {
    //   return;
    // }
    // this.#adjacentVertices.push(vertex);
    // vertex.addAdjacentVertex(this);
  }

  get value() {
    return this.#value;
  }

  get adjacentVertices() {
    return this.#adjacentVertices;
  }

  /**
   *
   * @param {Vertex} vertex
   * @param {Record<string, boolean>} visitedVertices
   */
  dfsTraverse(vertex, visitedVertices = {}) {
    visitedVertices[vertex.value] = true;

    console.log(vertex.value);

    for (const adjacentVertex of vertex.adjacentVertices) {
      if (visitedVertices[adjacentVertex.value]) {
        continue;
      }

      this.dfsTraverse(adjacentVertex, visitedVertices);
    }
  }

  /**
   *
   * @param {Vertex} vertex
   * @param {string} searchValue
   * @param {Record<string, boolean>} visitedVertices
   * @returns {Vertex}
   */
  dfs(vertex, searchValue, visitedVertices = {}) {
    if (vertex.value === searchValue) {
      return vertex;
    }

    visitedVertices[vertex.value] = true;

    for (const adjacentVertex of vertex.adjacentVertices) {
      if (visitedVertices[adjacentVertex.value]) {
        continue;
      }

      if (adjacentVertex.value === searchValue) {
        return adjacentVertex;
      }

      const vertexWereSearchingFor = this.dfs(
        adjacentVertex,
        searchValue,
        visitedVertices
      );

      if (vertexWereSearchingFor) {
        return vertexWereSearchingFor;
      }
    }

    return null;
  }

  /**
   *
   * @param {Vertex} vertex
   */
  bfsTraverse(vertex) {
    const queue = [];
    const visitedVertices = {};

    visitedVertices[vertex.value] = true;
    queue.push(vertex);

    let currentVertex = queue.shift();
    while (currentVertex) {
      console.log(currentVertex.value);

      for (const adjacentVertex of currentVertex.adjacentVertices) {
        if (!visitedVertices[adjacentVertex.value]) {
          visitedVertices[adjacentVertex.value] = true;
          currentVertex = queue.push(adjacentVertex);
        }
      }
      currentVertex = queue.shift();
    }
  }

  /**
   * Exercise 4.
   * @param {Vertex} vertex
   * @param {string} searchValue
   */
  bfs(vertex, searchValue) {
    if (vertex.value === searchValue) {
      return vertex;
    }

    const queue = [];
    const visitedVertices = {};

    visitedVertices[vertex.value] = true;
    queue.push(vertex);

    let currentVertex = queue.shift();
    while (currentVertex && currentVertex.value !== searchValue) {
      for (const adjacentVertex of currentVertex.adjacentVertices) {
        if (!visitedVertices[adjacentVertex.value]) {
          visitedVertices[adjacentVertex.value] = true;
          currentVertex = queue.push(adjacentVertex);
        }
      }
      currentVertex = queue.shift();
    }

    return currentVertex;
  }

  toString() {
    return "Vertex{ " + this.value + " }";
  }
}

const alice = new Vertex("Alice");
const bob = new Vertex("Bob");
const cynthia = new Vertex("Cynthia");

alice.addAdjacentVertex(bob);
alice.addAdjacentVertex(cynthia);
bob.addAdjacentVertex(cynthia);
cynthia.addAdjacentVertex(bob);

alice.dfsTraverse(alice);
const searchedVertex = alice.dfs(alice, "Unknown");
console.log(searchedVertex?.toString());
console.log("Before to run bfs");
alice.bfsTraverse(alice);

console.log("using bfs search");
console.log(alice.bfs(alice, "Bob")?.toString());
console.log(alice.bfs(alice, "Unknown")?.toString());
console.log(alice.bfs(alice, "Alice")?.toString());
console.log(alice.bfs(alice, "Cynthia")?.toString());

/**
 * Exercise 5. Write the shortest path algorithm for an unweighted graph
 * @param {Vertex} startVertex
 * @param {Vertex} endVertex
 * @param {Record<string, boolean} visitedVertices
 */
function findShortestPath(startVertex, endVertex, visitedVertices = {}) {
  let queue = [];

  const previousVertexTable = {};

  visitedVertices[startVertex.value] = true;
  queue.push(startVertex);

  let currentVertex = queue.shift();
  while (currentVertex) {
    for (const adjacentVertex of currentVertex.adjacentVertices) {
      if (!visitedVertices[adjacentVertex.value]) {
        visitedVertices[adjacentVertex.value] = true;
        queue.push(adjacentVertex);
        previousVertexTable[adjacentVertex.value] = currentVertex.value;
      }
    }

    currentVertex = queue.shift();
  }

  const shortestPath = [];
  let currentVertexValue = endVertex.value;

  while (currentVertexValue !== startVertex.value) {
    shortestPath.push(currentVertexValue);
    currentVertexValue = previousVertexTable[currentVertexValue];
  }

  shortestPath.push(startVertex.value);

  return shortestPath.reverse();
}

const idris = new Vertex("Idris");
const talia = new Vertex("Talia");
const kamil = new Vertex("Kamil");
const lina = new Vertex("Lina");
const ken = new Vertex("Ken");
const marco = new Vertex("Marco");
const sasha = new Vertex("Sasha");

idris.addAdjacentVertex(kamil);
idris.addAdjacentVertex(talia);
kamil.addAdjacentVertex(lina);
talia.addAdjacentVertex(ken);
ken.addAdjacentVertex(marco);
marco.addAdjacentVertex(sasha);
sasha.addAdjacentVertex(lina);

console.log("Shortest path form Idris to Lina is: ");
console.log(findShortestPath(idris, lina));

module.exports = Vertex;
