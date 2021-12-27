let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().split("\n");
// let input = `5
// 5 50 50 70 80 100
// 7 100 95 90 80 70 60 50
// 3 70 90 80
// 3 70 90 81
// 9 100 99 98 97 96 95 94 93 91
// `.trim().split("\n");

let loopLeng = input.shift();

for (let i = 0; i < loopLeng; i++) {
  let _array = input[i].split(" ").map(x => parseInt(x)).filter(x => x >= 0);
  let _array_leng = _array.shift();
  let result = 0;
  let mid = 0;
  let count = 0;
  for (let j = 0; j < _array_leng; j++) {
    result += _array[j];
  }
  mid = result / _array_leng;
  for (let j = 0; j < _array_leng; j++) {
    if (_array[j] > mid) {
      count++;
    }
  }

  console.log(`${((count / _array_leng) * 100).toFixed(3)}%`);

}

