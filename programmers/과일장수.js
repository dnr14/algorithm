function solution(k, m, score) {
  score.sort((a, b) => b - a);
  
  let answer = 0;
  let index = m - 1;
  
  const length = Math.floor(score.length / m);
  
  Array.from({ length }).forEach(() => {
    answer += score[index] * m;
    index += m;
  });
  
  return answer;
}
