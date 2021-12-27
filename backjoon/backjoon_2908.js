let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(" ");

let [x, y] = input;

x = parseInt([...x].reverse().reduce((l, r) => l += r));
y = parseInt([...y].reverse().reduce((l, r) => l += r));

x > y
  ? console.log(x)
  : console.log(y);
