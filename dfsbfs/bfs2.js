class Node {
  constructor(number, chlidren) {
    this.number = number;
    this.chlidren = [...chlidren];
    this.visit = false;
  }
}

function BFS(nodes, start_idx) {
  const queue = [];
  queue.push(nodes[start_idx]);

  while (1) {
    const node = queue.shift();

    if (node.visit === false) {
      console.log(node.number);
      node.visit = true;

      node.chlidren.forEach((el) => {
        const node = nodes[el - 1];
        queue.push(node);
      });
    }

    if (queue.length === 0) break;
  }
}
//               1
//      2                   3
//  4        5         6        7
// 1-2-3-4-5-6-7
const nodes = [
  new Node(1, [2, 3]),
  new Node(2, [4, 5]),
  new Node(3, [6, 7]),
  new Node(4, [5]),
  new Node(5, [4]),
  new Node(6, [7]),
  new Node(7, [6]),
];

BFS(nodes, 1);
