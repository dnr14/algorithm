function solution(arr1, arr2) {
  var answer = [];
  const len = arr1.length;

  for (let x = 0; x < len; x++) {
    const arr = [];
    for (let y = 0; y < arr1[x].length; y++) {
      arr.push(arr1[x][y] + arr2[x][y]);
    }
    answer.push(arr);
  }

  return answer;
}

const arr1 = [[1, 2]];
const arr2 = [
  [3, 4],
  [5, 6],
];
console.log(solution(arr1, arr2));
