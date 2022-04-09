function solution(arr) {
  let sum = 0;
  let stack = 0;
  arr.forEach((item) => {
    if (item === 1) {
      stack += 1;
      sum += stack;
    } else {
      stack = 0;
    }
  });
  return sum;
}
const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
