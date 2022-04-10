// 문제1,문제2 답은 나왔는데
// 타임아웃난다.
function solution1(strings, n) {
  var answer = [];

  answer = strings.sort((a, b) => {
    const a_value = a[n].charCodeAt();
    const b_value = b[n].charCodeAt();
    if (a_value === b_value) return -1;
    return a_value - b_value;
  });

  return answer;
}
const arr1 = ["sun", "bed", "car"];
const arr2 = ["abce", "abcd", "cdx"];
console.log(solution1(arr1, 1));
console.log(solution1(arr2, 2));

function solution2(numbers) {
  var answer = [];
  const arr = numbers.sort((a, b) => a - b);
  const len = arr.length;
  const set = new Set();
  for (let x = 0; x < len; x++) {
    for (let y = x + 1; y < len; y++) {
      set.add(arr[x] + arr[y]);
    }
  }
  answer = [...set];
  return answer;
}
console.log(solution2([2, 1, 3, 4, 1]));
console.log(solution2([5, 0, 2, 7]));
