let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().split("\n");
// let input = `5
// 10 20 30
// `.trim().split('\n');


let [x, y] = input;
x = parseInt(x);
y = y.split(" ").map(x => parseInt(x));
let max = y.reduce((l, r) => {
  if (r > l) {
    return r;
  }
  return l;
});

let result = 0;
for (const key in y) {
  result += (y[key] / max) * 100;
}
result = result / y.length;
console.log(result);





