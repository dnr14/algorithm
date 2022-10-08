function solution(str) {
  const arr = [];
  [...str].forEach((_, i) => {
    if (arr[arr.length - 1] !== str[i]) {
      arr.push(str[i]);
    } else {
      arr.pop();
    }
  });
  return arr.length ? 0 : 1;
}
