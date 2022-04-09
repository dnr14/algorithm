const arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

function solution(arr, k) {
  const ans = new Set();
  const len = arr.length;
  arr = arr.sort((a, b) => b - a);

  for (let idx = 0; idx < len; idx++) {
    for (let x = idx + 1; x < len; x++) {
      for (let y = x + 1; y < len; y++) {
        const sum = arr[idx] + arr[x] + arr[y];
        ans.add(sum);
      }
    }
  }
  return [...ans][k - 1];
}
console.log(solution(arr, 3));
