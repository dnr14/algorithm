
// main
(function main() {
  let source = "ABACABACABACABAAC";
  let pattern = "ABAC";
  let findindexArray = 고지식한알고리즘(source, pattern);

  console.log(`일치하는 패턴 갯수는 ${findindexArray.length}개 입니다.`);
  findindexArray.length == 0
    ? console.log(`해당 패턴은 일치하는게 없습니다.`)
    : console.log(`index는 ${findindexArray} 입니다. `);
})();

function 고지식한알고리즘(source, pattern) {
  let i = 0;
  let source_leng = source.length;
  let pattern_leng = pattern.length;
  let findindexArray = [];

  while (1) {
    if (i > source_leng) break;
    for (let j = 0; j < pattern_leng; ++j) {
      if (source[i + j] !== pattern[j]) {
        x = j;
        break;
      } else if (j === pattern_leng - 1) {
        x = pattern_leng;
        findindexArray.push(i);
      }
    }
    i++;
  }
  return findindexArray;
}

