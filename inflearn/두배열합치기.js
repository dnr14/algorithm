// 핵심은 투포인트 알고리즘이다.
function solution(n, arr1, m, arr2) {
  let answer = [];
  let p1 = 0;
  let p2 = 0;

  let max = m;
  let min = n;

  if (n > m) {
    max = n;
    min = m;
  }

  for (let idx = 0; idx < max; idx++) {
    if (arr1[p1] >= arr2[p2]) {
      answer.push(arr2[p2++]);
    } else {
      answer.push(arr1[p1++]);
    }
  }

  function get(arr, idx) {
    return arr.slice(idx);
  }

  if (p1 >= min) {
    answer.push(...get(arr2, p2));
  }
  if (p2 >= min) {
    answer.push(...get(arr1, p1));
  }

  return answer;
}

const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];
console.log(solution(3, arr1, 5, arr2));
