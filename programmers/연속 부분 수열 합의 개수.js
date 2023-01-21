function solution(elements) {
  const set = new Set();
  const { length } = elements;
  for (let i = 1; i <= length; i++) {
    for (let j = 0; j < length; j++) {
      const indexSum = i + j;
      let seq = elements.slice(j, indexSum);
      if (indexSum > length) {
        seq = [...seq, ...elements.slice(0, indexSum - length)];
      }
      const sum = seq.reduce((acc, curr) => acc + curr, 0);
      set.add(sum);
    }
  }
  return set.size;
}
