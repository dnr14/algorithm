function solution(str) {
  const sliceValue = str.slice(-4);
  const repeatValue = '*'.repeat(str.length - 4);
  return repeatValue + sliceValue;
}
