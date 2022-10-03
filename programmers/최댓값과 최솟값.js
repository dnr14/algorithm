function solution(s) {
  const result = s.split(' ');
  const max = Math.max(...result);
  const min = Math.min(...result);
  return min + ' ' + max;
}
