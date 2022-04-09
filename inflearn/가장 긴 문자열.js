function solution(num, strs) {
  let answer = strs[0];
  for (const iterator of strs) {
    if (iterator.length > answer.length) {
      answer = iterator;
    }
  }

  return answer;
}
console.log(solution(5, ["teacher", "time", "student", "beautiful", "good"]));
