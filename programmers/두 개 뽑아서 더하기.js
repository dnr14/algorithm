function solution(numbers) {
  const answer = [];
  
  Array.from({ length : numbers.length }).forEach((_, i) => {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (!answer.includes(sum)) answer.push(sum);
    }
  });
  
  return answer.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
