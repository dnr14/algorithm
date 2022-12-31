function solution(k, tangerine) {
  const map = new Map();
  let answer = 0;
  
  tangerine.forEach(org => {
    map.set(org, map.has(org) ? map.get(org) + 1 : 1);
  });
  
  const sortArr = [...map.values()].sort((a, b) => b - a);
  
  sortArr.forEach(value => {
    if (k > 0) {
      k -= value;
      answer++;
    }
  });
  return answer;
};
