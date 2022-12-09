function solution(str) {
  const obj = {};
  const answer = [];
  
  str.split('').forEach((key, idx) => {
    answer.push(obj[key] ? idx - obj[key] : -1);
    obj[key] = idx;
  });
  
  return answer;
}

console.log(solution('banana')); // [-1, -1, -1, 2, 2, 2]
console.log(solution('foobar')); // [-1, -1, 1, -1, -1, -1]
