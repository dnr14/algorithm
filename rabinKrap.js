
// main
(function () {
  // let source = "ababacabacaabacaaba";
  // let pattern = "abacaaba";
  let source = "가나다라가나";
  let pattern = "가나";
  patternCheck(source, pattern);

})();



function patternCheck(source, pattern) {
  let soruce_leng = source.length;
  let pattern_leng = pattern.length;
  let offset = pattern_leng;
  let patternHash = strHash(pattern);
  let sourceHash = 0;
  let hitCount = 0;
  let index = 0;

  while (1) {
    if (index === 0) {
      let sourceStr = source.slice(index, offset);
      sourceHash = strHash(sourceStr);
    }
    if (sourceHash == patternHash) {
      hitCount++;
      console.log(`${index + 1} 번째에서 발견했습니다.`);
      console.log(`source : ${source.slice(index, offset + index)} pattern : ${pattern}`);
    }
    let nextStrIndex = index + offset;
    let firstStr = source.slice(index, index + 1).charCodeAt(0) * Math.pow(2, offset - 1);
    let nextStr = source.slice(nextStrIndex, (nextStrIndex) + 1).charCodeAt(0) * Math.pow(2, 0);
    sourceHash = 2 * (sourceHash - firstStr) + nextStr;
    if (index++ >= soruce_leng - pattern_leng) break;
  }

}

function strHash(str) {
  let hash = 0;
  let index = 0;
  let squared = str.length - 1;
  while (index < str.length) {
    let char = str[index].charCodeAt(0);
    let hashNum = char * Math.pow(2, squared);
    hash += hashNum;
    index++;
    squared--;
  }
  return hash;
}


