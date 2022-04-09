function solution(str) {
  let answer = str;

  answer = Array.from(str).reduce((acc, cur) =>
    cur === "A" ? (acc += "#") : (acc += cur)
  );

  return answer;
}
console.log(solution("BANANA"));
