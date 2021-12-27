const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2`
)
  .trim();


let value = Number(input);

console.log(f(value));

function f(x) {
  if (x < 1) return 0;
  if (x <= 2) return 1;
  return f(x - 2) + f(x - 1);
}