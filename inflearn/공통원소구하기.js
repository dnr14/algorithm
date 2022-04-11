function solution(arr1, arr2) {
  let answer = [];

  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);

  let p1 = 0;
  let p2 = 0;
  const len1 = arr1.length;
  const len2 = arr2.length;
  let max = len1 > len2 ? len1 : len2;

  while (1) {
    const value1 = arr1[p1];
    const value2 = arr2[p2];

    if (value1 === value2) {
      answer.push(value2);
      p1++;
      p2++;
    } else if (value1 < value2) p1++;
    else p2++;

    if (p2 >= max || p1 >= max) break;
  }
  return answer.sort((a, b) => a - b);
}

const arr1 = [1, 3, 9, 5, 8, 7, 10];
const arr2 = [3, 2, 5, 7, 8, 10];
console.log(solution(arr1, arr2));
