// 대문자 65~90
function solution(str) {
  let answer = str;

  answer = Array.from(answer)
    .map((item) => {
      const num = String(item).charCodeAt();
      if (65 <= num && num <= 90) return String.fromCodePoint(num + 32);
      return String.fromCodePoint(num - 32);
    })
    .reduce((acc, cur) => acc + cur);

  return answer;
}
console.log(solution("StuDY"));
