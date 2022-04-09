function solution(word_len, words) {
  let ans;
  ans = words.filter((v, i) => words.indexOf(v) === i);

  // let ans = [];
  // words.forEach((item) => {
  //   if (ans.includes(item) === false) ans.push(item);
  // });

  return ans;
}
console.log(solution(5, ["good", "time", "good", "time", "student"]));
