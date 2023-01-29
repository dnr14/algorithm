function solution(n) {
  let answer = '';
  while (n / 3) {
    if (n % 3) {
      answer += n % 3;
      n = parseInt(n / 3);
    } else {
      answer += 4;
      n = parseInt(n / 3) - 1;
    }
  }
  return answer.split('').reverse().join('');
}
