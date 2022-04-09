function solution(arr) {
  const ans = [];

  arr.forEach((x, _, _arr) => {
    let cnt = 1;
    _arr.forEach((y) => {
      if (y > x) cnt += 1;
    });
    ans.push(cnt);
  });

  return ans;
}
const arr = [92, 92, 92, 100, 76];
console.log(solution(arr));
