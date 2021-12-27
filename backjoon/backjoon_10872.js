const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `10`
)
  .trim();


let value = Number(input);

let result = f(value);
console.log(result);
function f(x) {
  if (x === 0) return 1;
  if (x === 1) {
    return 1;
  }
  return x * f(--x);
}