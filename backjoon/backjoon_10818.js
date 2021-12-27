let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().split("\n");

// let input = `5
// 20 10 35 30 7`.split("\n");

let [leng, _array] = input;
leng = parseInt(leng);
_array = _array.split(" ").map(x => parseInt(x));

let max = -1000000;
let min = 1000000;
for (let i = 0; i < leng; i++) {
  if (max <= _array[i]) {
    max = _array[i];
  }
  if (min >= _array[i]) {
    min = _array[i];
  }
}
console.log(`${min} ${max}`);