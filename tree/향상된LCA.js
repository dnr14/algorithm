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
  constructor(n) {
    this.array = [];
    this.n = n;
    this.MAX = Math.ceil(Math.log2(n));
    this.parent = Array.from(Array(n), () => Array(this.MAX).fill(0));
    for (let i = 0; i < n; ++i) {
      this.array.push(i);
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

  // 노드의 깊이 파악
  // 재귀적으로 호출한다.
  dfs(startNode, depth = 0) {
    let node = startNode;
    node.depth = depth;
    if (node.visit === false) {
      node.visit = true;
      if (node.left !== undefined) {
        let leftNode = node.left;
        this.parent[leftNode.data][0] = node;
        if (leftNode.visit === false) {
          this.dfs(leftNode, node.depth + 1);
        }
      }
      if (node.right !== undefined) {
        let rightNode = node.right;
        this.parent[rightNode.data][0] = node;
        if (rightNode.visit === false) {
          this.dfs(rightNode, node.depth + 1);
        }
      }
    }
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

  connection() {
    //k는 2^0  2^1 .. 지수 표현
    //MAX 각 정점이 가질 수있는 최대 부모값
    //n 은 정점 갯수
    for (let k = 1; k < this.MAX; ++k) {
      for (let n = 0; n < this.n; ++n) {
        let crruentParent = this.parent[n][k - 1];
        if (crruentParent !== 0) {
          this.parent[n][k] = this.parent[crruentParent.data][k - 1];
        }
      }
    }
  }

}

//                        7
//       3                                 11
//   1       5                          9     13 
//  0  2   4   6                      8  10  12  14 
const tree = new Tree(15);

// parent[50001][k];
// n은 정점 k는 정점이 가질 수 있는 부모의 수
tree.make();
tree.dfs(tree.root);
tree.connection();
let v = tree.searchBtree(tree.root, 10);
let w = tree.searchBtree(tree.root, 0);
let node = 향상된LCA(v, w);

// 정점이 10^10이면 o(n)번을 반복해야된다.
// LCA인지 or v,w정점의 깊이가 같은지 확인
// o(log n) 으로 향상시킬 수 있다.
// 정점의 부모를 1,2,4,8,16... 순으로 배열에 넣어놓는다.
function 향상된LCA(v, w) {
  if (v.depth > w.depth) {
    let temp = v;
    v = w;
    w = temp;
  }

  let diff = w.depth - v.depth;
  for (let i = 0; diff != 0; ++i) {
    if (diff % 2 == 1) {
      w = tree.parent[w.data][i];
    }
    diff = Math.floor(diff /= 2);
  }

  if (v.data !== w.data) {
    for (let i = tree.MAX - 1; i >= 0; --i) {
      if (tree.parent[v.data][i] !== 0 && tree.parent[v.data][i] != tree.parent[w.data][i]) {
        v = tree.parent[v.data][i];
        w = tree.parent[w.data][i];
      }
    }
    v = tree.parent[v.data][0];
  }
  console.log(`data :${v.data} depth: ${v.depth}`);
}
