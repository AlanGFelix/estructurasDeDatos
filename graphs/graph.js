class Node {
    constructor(value) {
        this.value = value;
        this.connections = [];
    }
}

class Graph {
    constructor() {
        this.nodes = 0;
        this.adjascentMatrix = {};
    }

    addVertex(node) {
        this.nodes++;
        for(let node in this.adjascentMatrix) {
            this.adjascentMatrix[node].push(0);
        }
        this.adjascentMatrix[node] = []
        for(let i = 0; i <= this.nodes - 1; i++){
            this.adjascentMatrix[node].push(0);
        }
    }

    addEdge(node1, node2) {
        const index1 = Object.keys(this.adjascentMatrix).indexOf(node1.toString());
        const index2 = Object.keys(this.adjascentMatrix).indexOf(node2.toString());
        this.adjascentMatrix[node1][index2] = 1;
        this.adjascentMatrix[node2][index1] = 1;
    }
}

const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addEdge(0, 1);
graph.addVertex(2);
graph.addEdge(1, 2);
graph.addVertex(3);
graph.addEdge(2, 3);
graph.addEdge(1, 3);
graph.addVertex(4);
graph.addEdge(3, 4);
console.log(graph);