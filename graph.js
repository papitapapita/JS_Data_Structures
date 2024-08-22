class Graph {
    constructor() {
        this.adjacencyList = {};
        this.totalNodes = 0;
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
        this.totalNodes++;
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
}

const graph = new Graph();
graph.addEdge(8, 4);
graph.addEdge(4, 5);
graph.addEdge(4, 1);
graph.addEdge(5, 3);
graph.addEdge(1, 3);
graph.addEdge(1, 6);
graph.addEdge(3, 6);