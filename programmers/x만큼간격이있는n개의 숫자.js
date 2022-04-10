function solution(x, n) {
  return Array.from({ length: n }, (_, i) => (i + 1) * x);
}

console.log(solution(2, 5));
