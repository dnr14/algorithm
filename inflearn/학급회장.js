function solution(n, str) {
  const hash = {};
  let MAX = Number.MIN_SAFE_INTEGER;
  let answer;

  for (const el of str) {
    if (hash[el]) hash[el] += 1;
    else hash[el] = 1;
  }

  for (const [key, value] of Object.entries(hash)) {
    if (value > MAX) {
      MAX = value;
      answer = key;
    }
  }

  return answer;
}

const str = "BACBACCACCBDEDE";
const N = 15;
console.log(solution(N, str));
