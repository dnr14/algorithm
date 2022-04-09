function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  arr.forEach((item) => {
    if (item > answer) answer = item;
  });

  return answer;
}
console.log(solution([5, 3, 7, 11, 2, 15, 17]));
