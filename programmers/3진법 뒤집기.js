function solution(n) {
  let answer = 0;
  
  const transNum = n.toString(3);
  const reverseNum = transNum.split('').reverse().join('');
  answer = parseInt(reverseNum, 3);
  
  return answer;
}
