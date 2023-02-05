function solution(arr1, arr2) {
  const answer = [];
  
  for (let i = 0; i < arr1.length; i++) {
    let sum = 0;
    const temp = [];
    for (let k = 0; k < arr2[0].length; k++) {
      for (let j = 0; j < arr2.length; j++) {
        sum = sum + arr1[i][j] * arr2[j][k];
      }
      temp.push(sum);
      sum = 0;
    }
    answer.push(temp);
  }
  return answer;
}
