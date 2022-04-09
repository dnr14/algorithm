function solution(dwarfs) {
  let answer;
  const TOTAL_NUM = 100;
  const sum = dwarfs.reduce((acc, cur) => (acc += cur));
  const { length } = dwarfs;

  for (let x = 0; x < length - 1; ++x) {
    const dwarf1 = dwarfs[x];
    for (let y = x + 1; y < length; ++y) {
      const dwarf2 = dwarfs[y];
      if (sum - dwarf1 - dwarf2 === TOTAL_NUM) {
        dwarfs.splice(x, 1);
        dwarfs.splice(y - 1, 1);
      }
    }
  }
  answer = dwarfs;

  return answer;
}
console.log(solution([20, 7, 23, 19, 10, 15, 8, 13, 25]));
