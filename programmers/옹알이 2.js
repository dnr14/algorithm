function solution(babbling) {
  const answer = babbling.filter(word => {
    if (/(aya|ye|woo|ma)\1+/g.test(word)) return false;
    if (/^(aya|ye|woo|ma)+$/g.test(word)) return true;
  });
  return answer.length;
}

console.log(solution(['aya', 'yee', 'u', 'maa'])); // 1
console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa'])); // 2
