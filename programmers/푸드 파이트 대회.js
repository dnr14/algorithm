function solution(food) {
  return food
    .map((f) => f / 2)
    .reverse()
    .reduce((acc, cur, idx) => {
      if (cur !== 0) {
        acc = acc.padEnd(cur + acc.length, `${food.length - idx - 1}`);
        return acc.padStart(cur + acc.length, `${food.length - idx - 1}`);
      }
      return acc;
    }, '0');
}

