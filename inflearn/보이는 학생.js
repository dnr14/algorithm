function solution(arr) {
  let ans = 1;
  let max = arr[0];

  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] < max) {
      ans += 1;
      max = arr[idx];
    }
  }

  return ans;
}
const arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
