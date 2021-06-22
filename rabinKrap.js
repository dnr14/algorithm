
(function () {
  let source = "ababacabacaabacaaba";
  let pattern = "abacaaba";
  let patternHash = totalHash(pattern);
  patternCheck(source, pattern, patternHash);

})();


function totalHash(str) {
  let value = 0;
  for (let i = 0, j = (str.length - 1); j <= 0, i < str.length; j--, i++) {
    let char = str[i].charCodeAt(0);
    let hashNum = char * squared(1, 0, j);
    value += hashNum;
  }
  return value;
}

function patternCheck(source, pattern) {
  let soruce_leng = source.length;
  let pattern_leng = pattern.length;
  let patternHash = totalHash(pattern);
  let offset = pattern_leng;
  let hitCount = 0;
  let hash = 0;
  let index = 0;

  while (1) {
    if (index === 0) {
      let x = source.slice(index, offset);
      hash = totalHash(x);
    }
    if (hash == patternHash) {
      hitCount++;
      console.log(`${index + 1} 번째에서 발견했습니다.`);
      console.log(`source : ${source.slice(index, offset + index)} pattern : ${pattern}`);
    }
    let nextStrIndex = index + offset;
    let 가장앞에있는문자 = source.slice(index, index + 1).charCodeAt(0) * Math.pow(2, offset - 1);
    let 새롭게들어온문자 = source.slice(nextStrIndex, (nextStrIndex) + 1).charCodeAt(0) * Math.pow(2, 0);
    hash = 2 * (hash - 가장앞에있는문자) + 새롭게들어온문자;
    if (index++ >= soruce_leng - pattern_leng) break;
  }

}


function squared(x, count, squaredCount) {
  if (squaredCount === 0) return 1;
  if (squaredCount === 1) return 2;
  if (count === squaredCount) {
    return x;
  }
  return squared(x * 2, ++count, squaredCount);
}