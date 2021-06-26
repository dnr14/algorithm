class Tree {
  constructor(size) {
    this.array = [];
    for (let i = 0; i < size; ++i) {
      this.array.push(i);
    }
  }
  make() {
    this.root = this.makeBinaryTree(this.array, 0, this.array.length - 1);
  }
  makeBinaryTree(array, start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let node = new Node(array[mid]);
    node.left = this.makeBinaryTree(array, start, mid - 1);
    node.right = this.makeBinaryTree(array, mid + 1, end);
    return node;
  }
  searchBtree(node, findNum) {
    if (node === null) return;
    if (node.data === findNum) return node;
    if (findNum < node.data) {
      return this.searchBtree(node.left, findNum);
    } else if (findNum > node.data) {
      return this.searchBtree(node.right, findNum);
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
  addRight(node) {
    this.right = node;
  }
  addLeft(node) {
    this.left = node;
  }
}

const tree = new Tree(10);
tree.make();
console.log(tree.root);