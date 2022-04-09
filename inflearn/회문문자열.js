function solution(str) {
  str = str.toLowerCase();
  const reverse_str = [...str].reduce((acc, cur) => cur + acc);

  let fleg = "YES";

  if (reverse_str !== str) return "NO";
  Array.from(str).forEach((item, i) => {
    if (reverse_str[i] !== item) {
      fleg = "NO";
    }
  });

  return fleg;
}
// console.log(solution("gooG"));

function solution2(str) {
  str = str.toLowerCase();
  let fleg = "YES";

  const mid = Math.round(str.length / 2);
  const last_index = str.length - 1;

  for (let i = 0; i < mid; i++) {
    const y = last_index - i;
    if (str[i] !== str[y]) {
      fleg = "NO";
      break;
    }
  }

  return fleg;
}
// console.log(solution2("gfgoofofogfG"));

function solution3(str) {
  str = str.toLowerCase();
  const reverse_str = [...str].reduce((acc, cur) => cur + acc);
  let fleg = "YES";
  if (reverse_str !== str) return "NO";
  return fleg;
}
console.log(solution3("gooG"));
