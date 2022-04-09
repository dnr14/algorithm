function solution(str) {
  let ans = "";
  [...str].forEach((item, index) => {
    if (str.indexOf(item) === index) ans += item;
  });
  return ans;
}
console.log(solution("kkkkiiKKa"));
