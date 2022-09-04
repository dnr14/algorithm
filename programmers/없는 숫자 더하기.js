function solution(numbers) {
  var answer = 0;
  for (let idx = 0; idx <= 9; idx++) {
    const isFalse = numbers.includes(idx);
    if (!isFalse) answer += idx;
  }
  return answer;
}

solution([1, 2, 3, 4, 6, 7, 8, 0]);
