function solution(str) {
  let answer = "";
  let cnt = 0;
  let beforeStr = str[0];
  const len = str.length;

  // 미스매치 했을 때 기록
  function draw(cnt) {
    answer += `${beforeStr}`;
    if (cnt > 1) answer += cnt;
  }

  for (let idx = 0; idx < len; idx++) {
    const current = str[idx];
    if (beforeStr === current) {
      cnt++;
    } else {
      draw(cnt);
      cnt = 1;
      beforeStr = current;
    }
    if (idx === len - 1) draw(cnt);
  }
  return answer;
}

console.log(solution("KKHSSSSSSSE"));
