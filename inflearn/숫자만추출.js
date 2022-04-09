function solution(str) {
  let ans = [];
  [...str].forEach((item) => {
    const isNumber = parseInt(item);
    if (Number.isInteger(isNumber)) ans.push(isNumber);
  });
  const [first] = ans;
  if (first === 0) ans.shift();
  return ans.join("");
}
console.log(solution("g0en2T0s8eSoft"));
