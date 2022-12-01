function solution(s) {
  const x = s.split(/p/i).length - 1;
  const y = s.split(/y/i).length - 1;
  return x === y;
}
