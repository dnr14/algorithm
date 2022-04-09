function solution(pencil) {
  const N = 12;
  let answer;
  answer = Math.ceil(pencil / N);

  return answer;
}
console.log(solution(178));
