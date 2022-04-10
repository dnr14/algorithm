function solution(array, commands) {
  const answer = [];
  for (let i = 0; i < commands.length; i++) {
    answer.push(A(array, commands[i]));
  }

  function A(arr, [start, end, idx]) {
    return arr.slice(start - 1, end).sort((a, b) => a - b)[idx - 1];
  }
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
