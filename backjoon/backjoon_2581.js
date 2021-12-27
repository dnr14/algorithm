const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `60
    100`
)
  .trim()
  .split("\n");

let [x, y] = input.map(x => Number(x));
let array = [];

for (let i = x; i <= y; i++) {
  let decimal = i;
  if (decimal !== 1) {
    let result = false;
    for (let i = 2; i < decimal; ++i) {
      if (decimal % i === 0) {
        result = true;
      }
    }
    if (result === false) {
      array.push(i);
    }
  }
}
if (array.length === 0) {
  console.log(-1);
} else {
  let min = array[0];
  let total = array.reduce((l, r) => l + r);
  console.log(total);
  console.log(min);
}