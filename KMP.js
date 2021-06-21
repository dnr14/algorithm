// main
(function main() {
  let source = "ABACABACABACABAAC";
  let pattern = "ABAC";
  let findindexArray = KMP(source, pattern);

  if (findindexArray.length == 0) {
    console.log(`해당 패턴은 일치하는게 없습니다.`);
  } else {
    console.log(`일치하는 패턴 갯수는 ${findindexArray.length}개 입니다.`)
    console.log(`index는 ${findindexArray} 입니다. `);
  }
})();

//KMP
function KMP(source, pattern) {
  const table = new Array(pattern.length + 1).fill(0);
  createTable(table, pattern);
  let findindexArray = [];
  let position = 0;
  let source_leng = source.length;
  let pattern_leng = pattern.length;

  while (1) {
    if (position > source_leng) break;

    let leng = 0;
    for (let j = 0; j < pattern_leng; ++j) {
      if (source[position + j] !== pattern[j]) {
        leng = pattern.slice(0, j).length;
        break;
      } else if (j === pattern_leng - 1) {
        leng = pattern.slice(0, pattern_leng).length;
        findindexArray.push(position);
      }
    }
    let value = table[leng];
    position += (leng - value);
  }


  return findindexArray;
}

// 이동경로 테이블
function createTable(table, pattern) {
  table[0] = -1;
  for (let i = 0; i < pattern.length; i++) {
    let str = pattern.slice(0, i + 1);
    let leng = str.length;
    let result = boundary(str);
    table[leng] = result;
  }
}

//경계 hit
function boundary(pattern) {

  let lastIndex = pattern.length - 1;
  let result = 0;

  for (let prefixEnd = 0, suffixPosition = lastIndex; prefixEnd < lastIndex, suffixPosition > 0; ++prefixEnd, --suffixPosition) {
    let prefixStr = "";
    let subffixStr = "";
    let prefixStart = 0;
    let subffixEnd = suffixPosition;
    while (true) {
      prefixStr += pattern[prefixStart];
      subffixStr += pattern[subffixEnd];
      if (prefixStart === prefixEnd && subffixEnd === lastIndex) {
        break;
      }
      prefixStart++;
      subffixEnd++;
    }
    if (subffixStr === prefixStr) { result = prefixStr.length; }
  }
  return result;
}
