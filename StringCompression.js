solution("xababcdcdababcdcd");
function solution(s) {
  let min = "";
  //문자열을 자르는 기준
  let i = 1;
  while (1) {
    if (i++ === s.length) break;
    let str = "";
    let count = 1;
    for (let j = 0; j < s.length; j += i) {
      let offset = j + i;
      let currentStr = s.slice(j, offset);
      let nextStr = s.slice(offset, offset + i);
      if (currentStr === nextStr) {
        count++;
      } else {
        str += `${count != 1 ? count : ""}${currentStr}`;
        count = 1;
      }
    }

    if (min.length === 0 || min.length > str.length)
      min = str;
  }

  console.log(`str : ${min}  result : ${min.length}`);
  return min.length;
}

