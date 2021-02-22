class Graph {
    constructor(size = 1) {
        this.size = size;
        this.matrix = [];
        for (let i = 0; i < size; i++) {
            this.matrix.push([]);
            for (let j = 0; j < size; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }

    addEdge(vertex1, vertex2, weight = 1) {
        if (
            vertex1 < 0 ||
            vertex2 < 0 ||
            vertex1 > this.size - 1 ||
            vertex2 > this.size - 1
        ) {
            console.log("invalid vertex");
        } else if (vertex1 === vertex2) {
            console.log("same vertex");
        } else {
            this.matrix[vertex1][vertex2] = weight;
            this.matrix[vertex2][vertex1] = weight;
        }
    }

    removeEdge(vertex1, vertex2) {
        if (
            vertex1 < 0 ||
            vertex2 < 0 ||
            vertex1 > this.size - 1 ||
            vertex2 > this.size - 1
        ) {
            console.log("invalid vertex");
        } else if (vertex1 === vertex2) {
            console.log("same vertex");
        } else {
            this.matrix[vertex1][vertex2] = 0;
            this.matrix[vertex2][vertex1] = 0;
        }
    }

    addVertex() {
        this.size++;
        this.matrix.push([]);
        for (let i = 0; i < this.size; i++) {
            this.matrix[i][this.size - 1] = 0;
            this.matrix[this.size - 1][i] = 0;
        }
    }
}

let graph = new Graph(3);
graph.addEdge(0, 1, 2);
graph.addEdge(0, 2, 3);
graph.addVertex();
graph.addEdge(1, 3, 2);
graph.addEdge(2, 3, 4);
graph.removeEdge(2, 3);
graph.addEdge(2, 3, 6);
