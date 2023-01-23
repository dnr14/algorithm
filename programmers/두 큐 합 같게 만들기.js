function solution(queue1, queue2) {
  const queue = [...queue1, ...queue2];
  let sum1 = queue1.reduce((a, b) => a + b, 0);
  let sum2 = queue2.reduce((a, b) => a + b, 0);
  
  if (sum1 === sum2) {
    return 0;
  }
  
  const totalSum = sum1 + sum2;
  
  if (totalSum % 2 !== 0) {
    return -1;
  }
  
  const halfSum = totalSum / 2;
  let start = 0;
  let end = queue1.length;
  let cnt = 0;
  
  while (cnt <= queue.length * 3) {
    if (halfSum === sum1) {
      return cnt;
    } else if (halfSum > sum1) {
      sum1 += queue[end];
      end++;
    } else {
      sum1 -= queue[start];
      start++;
    }
    cnt++;
  }
  
  return -1;
}

