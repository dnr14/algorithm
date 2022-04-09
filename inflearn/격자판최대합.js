function solution(arr) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let x = 0; x < arr.length; x++) {
    let xSum = 0;
    let ySum = 0;

    for (let y = 0; y < arr.length; y++) {
      const xCurrent = arr[x][y];
      const yCurrent = arr[y][x];
      xSum += xCurrent;
      ySum += yCurrent;
    }
    if (xSum > max) max = xSum;
    if (ySum > max) max = ySum;
  }

  let xSum = 0;
  let ySum = 0;
  const maxIndex = arr.length - 1;
  for (let x = 0; x < arr.length; x++) {
    const xCurrent = arr[x][x];
    const yCurrent = arr[x][maxIndex - x];
    xSum += xCurrent;
    ySum += yCurrent;
    if (xSum > max) max = xSum;
    if (ySum > max) max = ySum;
  }

  return max;
}
const arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
