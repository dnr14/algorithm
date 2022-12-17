function solution(left, right) {
  let sum = 0;
  
  for (let num = left; num <= right; num++) {
    const sqrt = Math.sqrt(num);
    let cnt = 0;
    
    Array.from({ length : sqrt }).forEach((_, index) => {
      index++;
      if (index === sqrt) cnt++;
      if (num % index === 0) cnt += 2;
    });
    sum += cnt % 2 === 0 ? num : -num;
  }
  return sum;
}

console.log(solution(13, 17));
console.log(solution(24, 27));
