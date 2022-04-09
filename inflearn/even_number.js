function solution(arr) {
  const even_arr = arr.filter((item) => {
    if (item % 2 !== 0) return true;
  });
  let min = even_arr[0];

  const sum = even_arr.reduce((acc, cur) => (acc += cur));
  even_arr.forEach((item) => {
    if (item < min) min = item;
  });

  const answer = [sum, min];
  return answer;
}
console.log(solution([12, 77, 38, 41, 53, 92, 85]));
