// 찾고자 하는 노드1,노드2의 최소 공통 부모를 계산하시오.
// 최소의 의미는 제일 낮은 깊이를 의미한다.
class Node {
  constructor(data) {
    this.data = data;
    this.left = undefined;
    this.right = undefined;
    this.depth = undefined;
    this.parent = undefined;
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

  // 노드의 깊이 파악
  dfs(startNode, depth = 1) {
    let node = startNode;

    node.depth = depth;
    if (node.visit === false) {
      node.visit = true;
      if (node.left !== undefined) {
        let leftNode = node.left;
        leftNode.parent = node;
        if (leftNode.visit === false) {
          this.dfs(leftNode, node.depth + 1);
        }
      }
      if (node.right !== undefined) {
        let rightNode = node.right;
        rightNode.parent = node;
        if (rightNode.visit === false) {
          this.dfs(rightNode, node.depth + 1);
        }
      }
    }
  }

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
//                        7
//      3                                 11
//   1       5                          9     13 
//  0  2   4   6                      8  10  12  14 
const tree = new Tree(15);
tree.make();
tree.dfs(tree.root);
let u = tree.searchBtree(tree.root, 3);
let v = tree.searchBtree(tree.root, 5);
LCA(u, v);

// 일반적인 LCA 깊이와 부모가 같은지 노드 한칸씩비교
function LCA(u, v) {
  let depth1 = u.depth;
  let depth2 = v.depth;

  //서로 같은 노드에 있다면 해당노드가 공통부모
  //자기자신도 부모에 포함
  if (depth1 > depth2) {
    LCA(u.parent, v);
  } else if (depth1 < depth2) {
    LCA(u, v.parent);
  } else if (depth1 === depth2) {
    u.data === v.data
      ? console.log(u.data)
      : LCA(u.parent, v.parent);
  }
}

function BFS(node) {
  const queue = [];
  queue.push(node);

  while (1) {
    let node = queue.shift();
    console.log(node.data);
    if (node.visit === false) {
      node.visit = true;
      if (node.left !== undefined) {
        if (node.left.visit === false) {
          queue.push(node.left);
        }
      }

      if (node.right !== undefined) {
        if (node.right.visit === false) {
          queue.push(node.right);
        }
      }
    }
    if (queue.length === 0) return;
  }
}

