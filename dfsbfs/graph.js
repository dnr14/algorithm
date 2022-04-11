class Graph {
  constructor(size) {
    this.nodes = [];
    for (let i = 0; i < size; i++) {
      this.nodes.push(new Node(i));
    }
  }

  addEdge(start, end) {
    let node1 = this.nodes[start];
    let node2 = this.nodes[end];
    node1.children.push(node2);
    node2.children.push(node1);
  }

  dfs(startNode = this.nodes[0]) {
    const stack = [];
    stack.push(startNode);

    while (stack.length !== 0) {
      let node = stack.pop();
      if (node.visit === false) {
        node.visit = true;
        node.children.forEach((element) => {
          if (element.visit === false) {
            stack.push(element);
          }
        });
        this.print(`dfs ${node.data} ${node.visit}`);
      }
    }
  }

  bfs(startNode = this.nodes[0]) {
    const queue = [];
    queue.push(startNode);
    while (queue.length !== 0) {
      let node = queue.shift();
      if (node.visit === false) {
        node.visit = true;
        node.children.forEach((child) => {
          if (child.visit === false) {
            queue.push(child);
          }
        });
        this.print(`bfs ${node.data} ${node.visit}`);
      }
    }
  }

  dfsR(startNode = this.nodes[0]) {
    let node = startNode;
    node.visit = true;
    this.print(`dfsR ${node.data} ${node.visit}`);
    if (node.children.length === 0) return;
    node.children.forEach((child) => {
      if (child.visit === false) {
        child.visit = true;
        this.dfsR(child);
      }
    });
  }

  print(x) {
    console.log(x);
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
    this.visit = false;
  }
  add(child) {
    this.children.push(child);
  }
}

const graph = new Graph(9);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(3, 5);
graph.addEdge(5, 6);
graph.addEdge(5, 7);
graph.addEdge(6, 8);

/*
    0
    /
  1 ㅡ 3    7
  |  / | \ /
  | /  |  5
  2 ㅡ 4   \ 
            6 ㅡ 8
*/

// start 0노드
// dfs 0 true
// dfs 1 true
// dfs 3 true
// dfs 5 true
// dfs 7 true
// dfs 6 true
// dfs 8 true
// dfs 4 true
// dfs 2 true

let startNode = graph.nodes[3];
// graph.bfs();
// graph.dfs();
graph.dfsR(startNode);
