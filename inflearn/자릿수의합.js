// 최대 합이 제일 큰거 골라내기 합이 같다면 자리수 갯수
// 최대합
// 자릿수
function solution(arr) {
  const ans = {};

  const makeObj = (len, result) => ({
    len,
    result,
  });

  arr.forEach((el) => {
    const str = String(el);
    const len = str.length;
    const sum = [...str].reduce((acc, cur) => Number(acc) + Number(cur));

    if (ans[sum]) {
      const { result } = ans[sum];
      if (el > result) {
        ans[sum] = makeObj(len, el);
      }
    } else {
      ans[sum] = makeObj(len, el);
      max = el;
    }
  });
  const key_arr = Object.keys(ans);
  const key = key_arr[key_arr.length - 1];
  return ans[key].result;
}

const arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
