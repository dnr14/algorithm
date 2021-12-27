const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `30 20
    10 10
    10 20`
)
  .trim()
  .split("\n");


let arrayX = [];
let arrayY = [];

input.forEach(str => {
  let [x, y] = str.trim().split(" ").map(x => parseInt(x));
  arrayX.push(x);
  arrayY.push(y);
});
arrayX.sort((a, b) => a - b);
arrayY.sort((a, b) => a - b);

x = arrayX[1] === arrayX[0] ? arrayX[2] : arrayX[0];
y = arrayY[1] === arrayY[0] ? arrayY[2] : arrayY[0];

console.log(`${x} ${y}`);