function solution(number) {
  let answer = 0;
  const { length } = number;
  
  Array.from({ length : length - 2 }).forEach((_, i) => {
    for (let j = i + 1; j < length - 1; j++) {
      for (let k = j + 1; k < length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer++;
        }
      }
    }
  });
  
  
  return answer;
}
