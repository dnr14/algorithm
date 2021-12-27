const fs = require("fs");
const [...arr] = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1000 70 170`
)
  .trim()
  .split(" ");

const A = arr[0] * 1;
const B = arr[1] * 1;
const C = arr[2] * 1;

const margin = C - B;
const count = Math.floor(A / margin) + 1

console.log(margin <= 0 ? -1 : count);


