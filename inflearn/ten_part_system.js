function solution(day, numbers) {
  let answer;
  answer = numbers.filter((item) => {
    if (item % 10 === day) return true;
  });

  return answer.length;
}
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));
