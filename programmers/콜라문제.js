function solution(a, b, n) {
  let have = n;
  let earn = 0;
  while (have >= a) {
    const num = Math.floor(have / a);
    const result = num * b;
    earn += result;
    have = result + (have % a);
  }
  return earn;
}

console.log('결과', solution(2, 1, 20));
