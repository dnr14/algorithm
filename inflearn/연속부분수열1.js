function solution(n, m, arr) {
  let answer = [];
  let lt = 0;
  let rt = 0;

  const { length } = arr;
  let sum = 0;
  let obj = [];

  function setInit() {
    lt++;
    rt = lt;
    sum = 0;
    obj = [];
  }

  while (1) {
    sum += arr[rt];
    if (m > sum) rt++;
    else if (m === sum) {
      answer.push(arr.slice(lt, rt + 1));
      setInit();
    } else if (sum > m) setInit();

    if (rt === length) break;
  }

  return answer;
}

const arr = [1, 2, 1, 3, 1, 1, 1, 2, 6, 4, 2];
console.log(solution(8, 6, arr));
