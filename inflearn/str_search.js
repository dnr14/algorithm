function solution(str, alphabet) {
  let answer = 0;
  Array.from(str).forEach((item) => {
    if (item === alphabet) answer++;
  });

  return answer;
}
console.log(solution("COMPUTERPROGRAMMING", "R"));
