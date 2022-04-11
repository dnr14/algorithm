function solution(str1, str2) {
  const getHash = (value) =>
    [...value].reduce((acc, cur) => acc + cur.charCodeAt(), 0);

  return getHash(str1) !== getHash(str2) ? "NO" : "YES";
}

const str1 = "AbaAeCe";
const str2 = "baeAeCA";
console.log(solution(str1, str2));
