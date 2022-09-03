function solution(arr) {
  const answer = [];
  let pre = Number.MAX_SAFE_INTEGER;
  arr.forEach((el) => {
    if (el !== pre) {
      answer.push(el);
      pre = el;
    }
  });
  return answer;
}
