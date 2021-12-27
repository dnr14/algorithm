class Tree {
  constructor(size) {
    this.nodes = [];
    for (let i = 1; i <= size; ++i) {
      this.nodes.push(new Node(i));
    }
  }

  //간선 연결
  addEdge(index, left, right) {
    let node = this.nodes[index];
    right !== null ? node.addRight(this.nodes[right]) : node.addRight(undefined);
    left !== null ? node.addLeft(this.nodes[left]) : node.addLeft(undefined);
  }
}
class Node {
  constructor(data) {
    //자기자신 번호
    this.data = data;
    // 왼쪽 노드
    this.right = null;
    // 오른쪽 노드
    this.left = null;
  }
  addRight(node) {
    this.right = node;
  }
  addLeft(node) {
    this.left = node;
  }
}

const tree = new Tree(15);

tree.addEdge(0, 1, 2);
tree.addEdge(1, 3, 4);
tree.addEdge(2, 5, 6);
tree.addEdge(3, 7, 8);
tree.addEdge(4, 9, 10);
tree.addEdge(5, 11, 12);
tree.addEdge(6, 13, 14);
tree.addEdge(7, null, null);
tree.addEdge(8, null, null);
tree.addEdge(9, null, null);
tree.addEdge(10, null, null);
tree.addEdge(11, null, null);
tree.addEdge(12, null, null);
tree.addEdge(13, null, null);
tree.addEdge(14, null, null);



/*          1
          /  \
         /    \
        /      \
       /        \
      2          3
     / \        / \
    4   5      6   7
   / \  / \   / \  / \
  8   910 11 12 13 14  15

*/


// inorder left, root, right
// preorder root left right
// postorder left right root 

//inorder 아래꼭지점
// 8 4 9 2 10 5 11 1 12 6 13 3 14 7 15
// preorder  왼쪽 꼭지점
// 1 2 4 8 9 5 10 11 3 6 12 13 7 14 15
// postorder 오른쪽 꼭지점
// 8 9 4 10 11 5 12 13 6 14 15 7 3 1

//시작 노드
let root = tree.nodes[0];
inorder(root);
// preorder(root);
// postorder(root);

function inorder(node) {

  if (node.left !== undefined) {
    inorder(node.left);
  }
  console.log(node.data);
  if (node.right !== undefined) {
    inorder(node.right);
  }

}

function preorder(node) {

  console.log(node.data);
  if (node.left !== undefined) {
    preorder(node.left);
  }
  if (node.right !== undefined) {
    preorder(node.right);
  }

}

function postorder(node) {

  if (node.left !== undefined) {
    postorder(node.left);
  }
  if (node.right !== undefined) {
    postorder(node.right);
  }
  console.log(node.data);
}

