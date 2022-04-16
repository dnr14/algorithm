// 최소 공통 조상
// 찾고자 하는 노드1,노드2의 최소 공통 부모를 계산하시오.
// 최소의 의미는 자식정점에서 가장 깊은 깊이를 가진 부모를 의미한다.
// v가 w의 자식이라면 v는 w의 lca가 될 수 있다.
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
  // 재귀적으로 호출한다.
  dfs(startNode, depth = 0) {
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

  // 정수로만 이루어지고 정렬된 배열을 가지고 트리를 만드는 함수
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

  // 만들어진 트리에서 찾고자하는 Node(vertex) 찾아주는 함수
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
let w = tree.searchBtree(tree.root, 14);
let v = tree.searchBtree(tree.root, 8);
LCA(w, v);

// 일반적인 LCA 깊이와 부모가 같은지 노드 한칸씩비교
// O(n)이 걸린다.
function LCA(w, v) {
  let depth1 = w.depth;
  let depth2 = v.depth;

  //서로 같은 노드에 있다면 해당노드가 공통부모
  //자기자신도 부모에 포함
  if (depth1 > depth2) {
    LCA(w.parent, v);
  } else if (depth1 < depth2) {
    LCA(w, v.parent);
  } else if (depth1 === depth2) {
    w.data === v.data ? console.log(w.data) : LCA(w.parent, v.parent);
  }
}
