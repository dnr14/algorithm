// 목적은 한도 내에서 최대 학생을 사주는것이다.
// 자기자신을 할인 받고 담아보자.
function solution(arr) {
  let [학생수_예산, ...rest] = arr;
  let [, 예산] = 학생수_예산;
  let max = Number.MIN_SAFE_INTEGER;
  const len = rest.length;

  rest = rest.sort((a, b) => a[0] - b[0]);

  for (let x = 0; x < len; x++) {
    let cnt = 0;
    let temp = 예산;
    for (let y = 0; y < len; y++) {
      const [물건가격, 배송비] = rest[y];
      let 가격 = 0;
      if (x === y) {
        가격 = 물건가격 / 2 + 배송비;
      } else {
        가격 = 물건가격 + 배송비;
      }

      if (temp - 가격 >= 0) {
        temp -= 가격;
        cnt++;
      }
    }

    if (cnt > max) max = cnt;
  }

  return max;
}

const arr = [
  [5, 28],
  [6, 6],
  [2, 2],
  [10, 3],
  [4, 3],
  [4, 5],
];

console.log(solution(arr));
