let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let index = 0;
while (1) {
  let values = input[index].split(" ").map((x) => parseInt(x));
  let [A, B] = values;
  if (0 < A && B < 10) {
    console.log(A + B);
  }

  if (++index === input.length) break;
}
