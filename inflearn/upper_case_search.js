// 아스키코드에서 대문자는 65 ~ 90
function solution(str) {
  let answer = 0;
  Array.from(str).forEach((item) => {
    const num = item.charCodeAt(0);
    if (65 <= num && num <= 90) answer++;
  });

  return answer;
}
console.log(solution("KoreaTimeGood"));
