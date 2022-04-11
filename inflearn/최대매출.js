// function solution(n, k, arr) {
//   let answer = 0;
//   const N = n;
//   let sum = 0;
//   let MAX = Number.MIN_SAFE_INTEGER;
//   const K = k - 1;

//   for (let rt = 0; rt < N; rt++) {
//     let tmp = rt;
//     while (1) {
//       sum += arr[tmp];
//       if (sum >= MAX) MAX = sum;
//       if (tmp === rt + K) break;
//       tmp++;
//     }
//     sum = 0;
//   }
//   console.log(MAX);
// 슬라이딩 윈도우
function solution(n, k, arr) {
  const N = n;
  let sum = 0;
  let MAX = Number.MIN_SAFE_INTEGER;
  let CNT = 0;

  for (let rt = 0; rt < N; rt++) {
    const value = arr[rt];
    if (CNT === k) {
      sum -= arr[rt - k];
    } else CNT++;
    sum += value;
    if (sum >= MAX) MAX = sum;
  }
  let answer = MAX;
  return answer;
}

const array = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
const N = 10;
const K = 3;
console.log(solution(N, K, array));
