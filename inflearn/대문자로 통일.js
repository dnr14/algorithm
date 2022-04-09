function solution(str) {
  let answer = str;

  answer = Array.from(answer)
    .map((item) => {
      const num = String(item).charCodeAt(0);
      if (num >= 97 && num <= 122) {
        return String.fromCharCode(num - 32);
      }
      return item;
    })
    .reduce((acc, cur) => acc + cur);

  return answer;
}
console.log(solution("ItisTimeToStudy"));
