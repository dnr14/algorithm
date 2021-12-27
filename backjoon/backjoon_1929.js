const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3 16`
)
  .trim()
  .split(" ");

let [M, N] = input.map(x => Number(x));
let divisor = [];
let value = N;
for (let i = 2; i <= N; i++) {
  if (value % i !== 0) {
    divisor.push(i);
  }
}

divisor = divisor.filter(x => {
  let result = true;
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      result = false;
      return;
    }
  }
  if (result === true) {
    return x;
  }
});

divisor.forEach(x => {
  console.log(x);
})