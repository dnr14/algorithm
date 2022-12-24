function solution(t, p) {
  const strArray = [...t];
  const answer = strArray.map((_, index) => {
    const str = strArray.slice(index, index + p.length);
    return str.length === p.length ? parseInt(str.join('')) <= parseInt(p) : null;
  }).reduce((acc, cur) => cur ? acc + 1 : acc, 0);
  
  return answer;
}

console.log(solution('3141592', '271'));
