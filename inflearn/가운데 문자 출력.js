// 대문자 65~90
function solution(str) {
  const { length } = str;
  const index = Math.floor(length / 2);
  if (length % 2 === 1) {
    return str.substring(index, index + 1);
  }
  return str.substring(index - 1, index + 1);
}
console.log(solution("study"));
