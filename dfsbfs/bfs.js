class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.depth = null;
    this.parent = null;
    this.visit = false;
  }
  addRight(node) {
    this.right = node;
  }
  addLeft(node) {
    this.left = node;
  }
}

class Tree {
  constructor(size) {
    this.array = [];
    for (let i = 0; i < size; ++i) {
      this.array.push(i);
    }
  }
  // 정수로만 이루어진 정렬된 배열을 가지고 트리를 만드는 함수
  make() {
    this.root = this.makeBinaryTree(this.array, 0, this.array.length - 1);
  }
  makeBinaryTree(array, start, end) {
    if (start > end) return;
    let mid = Math.floor((start + end) / 2);
    let node = new Node(array[mid]);
    node.left = this.makeBinaryTree(array, start, mid - 1);
    node.right = this.makeBinaryTree(array, mid + 1, end);
    return node;
  }
}

//                        7
//      3                                 11
//   1       5                          9     13
//  0  2   4   6                      8  10  12  14
const tree = new Tree(15);
tree.make();
BFS(tree.root);
//결과 7 3 11 1 5 9 13 0 2 4 6 8 10 12 14

function BFS(node) {
  const queue = [];
  queue.push(node);

  while (1) {
    let node = queue.shift();
    console.log(node.data);
    if (node.visit === false) {
      node.visit = true;
      if (node.left !== null) {
        if (node.left.visit === false) {
          queue.push(node.left);
        }
      }

      if (node.right !== null) {
        if (node.right.visit === false) {
          queue.push(node.right);
        }
      }
    }
    if (queue.length === 0) return;
  }
}
