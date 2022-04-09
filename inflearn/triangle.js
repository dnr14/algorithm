function solution(a, b, c) {
  let max = a;
  if (max < b) max = b;
  if (max < c) max = c;

  let answer = 0;
  if (a < max) answer += a;
  if (b < max) answer += b;
  if (c < max) answer += c;
  return max - answer > 0 ? "NO" : "YES";
}
console.log(solution(5, 5, 10));
