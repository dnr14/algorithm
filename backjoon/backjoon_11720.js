let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let [x, y] = input;

y = [...y].map(x => parseInt(x)).reduce((l, r) => l + r);
console.log(y);

