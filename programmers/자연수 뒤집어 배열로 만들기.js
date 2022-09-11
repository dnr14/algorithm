function solution(n) {
  const strArr = n.toString().split("");
  
  const reverseArr = strArr.reverse();
  
  return reverseArr.map((n) => parseInt(n, 10));
}

console.log(solution(12345));
