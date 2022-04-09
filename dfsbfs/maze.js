class Maze {
  constructor() {
    // 미로 초기값
    this.array = [
      [0, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 0, 1, 0, 1],
      [0, 0, 1, 0, 0, 0, 0],
      [1, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 0, 0],
      [1, 0, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    // 출구 초기값
    // 미로 출구 바꾸고 싶으면 x,y를 바꾸면 된다.
    this.ESCAPE = { x: 4, y: 6 };
  }

  // 미로 초기값을 가지고 0은 제거 후 노드생성
  createNodes() {
    this.array.forEach((row, x) => {
      row.forEach((value, y) => {
        if (value !== 0) return;
        this.array[x][y] = new Node(x, y);
      });
    });
    return this;
  }

  // 자기 자신 기준으로 인접 노드가 있는지 확인
  addEdge() {
    this.array.forEach((rows) => {
      rows.forEach((value) => {
        if (value === 1) return;

        let node = value;
        let { x, y } = node;

        //상하좌우 검사
        let xup = x + 1; //남
        let xdown = x - 1; // 북
        let yup = y + 1; // 동
        let ydown = y - 1; //서

        let INF = Number.MAX_SAFE_INTEGER;
        let 북 = INF;
        let 동 = INF;
        let 서 = INF;
        let 남 = INF;

        // y축이 미로의 끝길이보다 안크면
        if (yup !== this.array.length) {
          동 = this.array[x][yup];
          if (동 !== INF) {
            node.add(동);
          }
        }

        // x축이 미로의 끝길이보다 안크면
        if (xup !== this.array[0].length) {
          남 = this.array[xup][y];
          if (남 !== INF) {
            node.add(남);
          }
        }

        // x축이 음수가 아닐때 북쪽
        if (xdown >= 0) {
          북 = this.array[xdown][y];
          if (북 !== INF) {
            node.add(북);
          }
        }

        // y축이 음수가 아닐때 서쪽
        if (ydown >= 0) {
          서 = this.array[x][ydown];
          if (서 !== INF) {
            node.add(서);
          }
        }
      });
    });
    return this;
  }
}

class Node {
  constructor(x, y) {
    // 2차원배열에서 자기자신의 위치값
    this.x = x;
    this.y = y;
    // 인접노드가 있다면 배열에 값이있음
    this.children = [];
    //노드에 방문 했는지 체크
    this.visit = false;
    // bfs로 검사시 같은 깊이인지 확인용
    this.data = -1;
  }
  //인접노드가 있다면 표시
  add(child) {
    this.children.push(child);
  }
}

const maze = new Maze().createNodes().addEdge();
let statNode = maze.array[6][6];

bfs(statNode);
// dfs(statNode);

// 너비 우선탐색
function bfs(start) {
  // 몇번만에 찾았는지 확인용
  let count = 1;
  const queue = [];
  queue.push(start);
  while (1) {
    if (queue.length === 0) break;
    let node = queue.shift();
    let { x, y, data } = node;

    if (node.visit === false) {
      node.visit = true;
      node.children.forEach((child) => {
        if (child.visit === false) {
          child.data = data + -1;
          queue.push(child);
        }
      });
    }

    count++;
    if (validation(x, y)) {
      console.log(`bfs 출구 count : ${count}`);
      break;
    }
  }
}

// 깊이 우선 탐색
function dfs(start) {
  let count = 1;
  const stack = [];
  stack.push(start);
  while (1) {
    if (stack.length === 0) break;
    let node = stack.pop();
    let { x, y, data } = node;

    if (node.visit === false) {
      node.visit = true;
      node.children.forEach((child) => {
        if (child.visit === false) {
          child.data = data + -1;
          stack.push(child);
        }
      });
    }

    count++;
    if (validation(x, y)) {
      console.log(`dfs 출구 count : ${count}`);
      break;
    }
  }
}

//출력
function validation(x, y) {
  let node = maze.array[x][y];
  console.log(`x:`, node.x, `y:`, node.y, `data :`, node.data);
  if (x === maze.ESCAPE.x && y === maze.ESCAPE.y) {
    return true;
  } else {
    return false;
  }
}
