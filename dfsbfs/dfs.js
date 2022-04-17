class Node {
  constructor(number, left, right) {
    this.visit = false;
    this.left = left;
    this.right = right;
    this.number = number;
  }
}

const nodes = [
  new Node(1, 2, 3),
  new Node(2, 4, 5),
  new Node(3, 6, 7),
  new Node(4, 8, 9),
  new Node(5, 10, 11),
  new Node(6, 12, 13),
  new Node(7, 14, 15),
  new Node(8, null, 9),
  new Node(9, 8, null),
  new Node(10, null, 11),
  new Node(11, 10, null),
  new Node(12, null, 13),
  new Node(13, 12, null),
  new Node(14, null, 15),
  new Node(15, 14, null),
];

//               1
//      2                   3
//  4        5         6        7
//8   9   10   11   12   13   14  15
// 1-2-4-8-9-5-10-11-3-6-12-13-7-14-15
function dfs(index) {
  const node = nodes[index];
  if (node.visit === false) {
    node.visit = true;
    console.log(`${node.number}번째 노드 방문`);
    if (node.left === null) return;
    dfs(node.left - 1);
    if (node.right === null) return;
    dfs(node.right - 1);
  }
}

dfs(0);

function dfs2(nodes, idx) {
  const children = nodes[idx];
  if (children === null) return;

  for (const node of children) {
    console.log("노드==>", node);
    dfs(nodes, node - 1);
  }
}

//          1
//    2          3
// 4  5  6          7
//       8

const nodes2 = [[2, 3], [4, 5, 6], [7], null, null, [8], null, null];

dfs(nodes2, 0);
