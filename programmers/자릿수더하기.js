function solution(n) {
  var answer = 0;
  const answerArray = n.toString().split("");
  answer = answerArray.reduce((a, b) => Number(a) + Number(b), 0);
  return answer;
}
