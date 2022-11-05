function solution(word) {
  const obj = ['A', 'E', 'I', 'O', 'U'].reduce((acc, cur, idx) => ({ ...acc, [cur] : idx }), {});
  
  const plus = [781, 156, 31, 6, 1];
  return word
    .split('')
    .reduce((acc, cur, idx) => acc + obj[cur] * plus[idx] + 1, 0);
}

console.log(solution('EIO'));
