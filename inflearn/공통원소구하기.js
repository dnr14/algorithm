function solution(n, arr1, m, arr2) {
  let answer = [];

  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);

  let p1 = 0;
  let p2 = 0;
  let max = n > m ? n : m;

  while (1) {
    const value1 = arr1[p1];
    const value2 = arr2[p2];

    if (value1 < value2) {
      p1++;
    }

    if (value1 === value2) {
      answer.push(value2);
      p1++;
      p2++;
    }
    if (value1 > value2) {
      p2++;
    }

    if (p2 >= max || p1 >= max) break;
  }
  return answer.sort((a, b) => a - b);
}

const arr1 = [1, 3, 9, 5, 8, 7];
const arr2 = [3, 2, 5, 7, 8];
console.log(solution(5, arr1, 5, arr2));
