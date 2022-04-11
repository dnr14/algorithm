function solution(array, loc) {
  let answer = [];

  class PrintJob {
    constructor(pri, idx) {
      this.pri = pri;
      this.idx = idx;
    }
    get get_pri() {
      return this.pri;
    }
    get get_idx() {
      return this.idx;
    }
  }

  function makeNode(array) {
    array.forEach((locaction, idx) => {
      answer.push(new PrintJob(locaction, idx));
    });
  }

  makeNode(array);

  let cnt = 0;

  while (1) {
    const job = answer.shift();

    const isTrue = answer.every((el) => el.get_pri <= job.get_pri);
    if (isTrue) {
      cnt++;
      console.log(`${job.get_pri}번째 노드 출력`);
      if (job.get_idx === loc) break;
    } else {
      answer.push(job);
    }
    if (answer.length === 0) break;
  }
  return cnt;
}

// priorities loc idx
// [2,1,3,2]   2   1
// [1,1,9,1,1,1] 0 5

// 1. 큐를 만든다.
// 2. 0번을 꺼내서 max priority가 아니면 다시 끝에 넣는다.
// 3. max priority이면 내가 찾는 job이 맞는지 확인한다.

const array = [2, 1, 3, 2];
// const array = [1, 1, 9, 1, 1, 1];
console.log(solution(array, 2));
