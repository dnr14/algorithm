// function solution(n, m, arr) {
//   let answer = 0;
//   const { length } = arr;
//   let start_idx = 0;
//   let chunk_idx = 0;
//   let sum = 0;
//   let obj = [];

//   while (1) {
//     const _len = start_idx + chunk_idx;
//     if (_len >= 5) {
//       start_idx = 0;
//       chunk_idx++;
//     } else {
//       for (let idx = start_idx; idx <= _len; idx++) {
//         obj.push(arr[idx]);
//         sum += arr[idx];
//       }

//       if (sum <= 5) {
//         console.log("obj=>", obj, sum);
//         answer++;
//         start_idx++;
//       } else {
//         start_idx = 0;
//         chunk_idx++;
//       }
//       obj = [];
//       sum = 0;
//     }
//     if (chunk_idx === length) break;
//   }

//   return answer;
// }

function solution(n, m, arr) {
  let answer = 0;

  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }

    answer += rt - lt + 1;
  }
  return answer;
}

const arr = [1, 3, 1, 2, 3];
console.log(solution(5, 5, arr));
