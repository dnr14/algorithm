function solution(a, b) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  const { length : minIndex } = a.filter((value) => b.includes(value));
  const { length : zero } = a.filter((value) => !value);
  return [rank[minIndex + zero], rank[minIndex]];
}
