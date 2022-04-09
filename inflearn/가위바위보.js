function solution(arr1, arr2) {
  let ans = [];
  const { length } = arr1;
  console.log(length);
  for (let idx = 0; idx < length; idx++) {
    let result = "B";
    const A = arr1[idx];
    const B = arr2[idx];

    if (A === B) result = "D";
    if (A === 1 && B === 3) result = "A";
    if (A === 2 && B === 1) result = "A";
    if (A === 3 && B === 2) result = "A";
    ans.push(result);
  }
  return ans;
}
const arr1 = [2, 3, 3, 1, 3];
const arr2 = [1, 1, 2, 2, 3];
console.log(solution(arr1, arr2));
