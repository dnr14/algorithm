function solution(arr) {
  const ans = {};

  arr.forEach((x) => {
    x.forEach((y, idx) => {
      const 등수 = idx + 1;
      if (ans[y]) {
        const { max } = ans[y];
        if (max > 등수) ans[y].max = 등수;
        if (max < 등수) ans[y].min = 등수;
      } else {
        ans[y] = {
          max: 등수,
          min: 등수,
        };
      }
    });
  });

  let cnt = 0;
  const entries = Object.entries(ans);
  // 멘티가 멘토를 선별
  entries.forEach(([멘티, value]) => {
    const { max } = value;
    entries.forEach(([멘토, value]) => {
      const { min } = value;
      if (max >= min && 멘티 !== 멘토) {
        // console.log(`${멘티}의 멘토는 ${멘토}다.`);
        cnt++;
      }
    });
  });

  return cnt;
}
const arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
