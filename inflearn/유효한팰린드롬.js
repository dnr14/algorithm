// 65 ~ 90 대문자
// 97 ~ 122 소문자
function solution(str) {
  str = str.toLowerCase();
  let ans = "YES";
  let len = str.length;
  let mid = Math.floor(len / 2);
  const last_index = len - 1;

  function flegCheck(value) {
    value = value.charCodeAt(0);
    return (value >= 65 && value <= 90) || (value >= 97 && value <= 122);
  }

  for (let i = 0; i < mid; i++) {
    const i_value = str[i];
    const y_value = str[last_index - i];
    const i_fleg = flegCheck(i_value);
    const y_fleg = flegCheck(y_value);

    if (i_fleg && y_fleg) {
      if (i_value !== y_value) return "NO";
    }
  }

  return ans;
}
console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
