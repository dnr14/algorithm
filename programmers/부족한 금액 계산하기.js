function solution(price, money, count) {
  const value = Array.from({ length : count }).reduce((acc, curr, idx) => acc + (price * (idx + 1)), 0);
  return value > money ? value - money : 0;
}
console.log(solution(3, 20, 4));
