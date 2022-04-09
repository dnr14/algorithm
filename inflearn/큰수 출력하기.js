function solution(arr) {
  let ans = [];

  arr.forEach((subfix, idx, arr) => {
    const prefix = arr[idx - 1] ?? Number.MIN_SAFE_INTEGER;
    if (subfix > prefix) ans.push(subfix);
  });
  return ans;
}
const arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
