function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  
  A.forEach((_, idx) => {
    answer += A[idx] * B[idx];
  });
  
  return answer;
}
