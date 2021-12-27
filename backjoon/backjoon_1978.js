const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4
    1 3 5 7`
)
  .trim()
  .split("\n");

let [x, y] = input;
x = Number(x);
y = y.trim().split(" ").map(x => parseInt(x));
let count = 0;

for (let i = 0; i < y.length; ++i) {
  let decimal = y[i];
  if (decimal !== 1) {
    let result = false;
    for (let i = 2; i < decimal; ++i) {
      if (decimal % i === 0) {
        result = true;
      }
    }

    if (result === false) {
      count++;
    }
  }
}

console.log(count);