function solution(arr) {
  let cnt = 0;

  const { length } = arr;

  for (let x = 0; x < length; x++) {
    for (let y = 0; y < length; y++) {
      const current = arr[x][y];

      const _x = x - 1 < 0 ? 0 : x - 1;
      const x_ = x + 1 === length ? length - 1 : x + 1;
      const _y = y - 1 < 0 ? 0 : y - 1;
      const y_ = y + 1 === length ? length - 1 : y + 1;

      if (current < arr[_x][y]) continue;
      if (current < arr[x_][y]) continue;
      if (current < arr[x][_y]) continue;
      if (current < arr[x][y_]) continue;
      cnt += 1;
    }
  }
  return cnt;
}
const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(solution(arr));
