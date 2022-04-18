function solution(arr1, arr2) {
  var answer = [];
  arr1.forEach((row, rowIndex) => {
    answer.push(row.map((col, colIndex) => col + arr2[rowIndex][colIndex]));
  });
  return answer;
}
