let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let leng = input[0];

for (let i = 1; i <= leng; i++) {
  let values = input[i].split(' ').map(x => parseInt(x));
  console.log(`Case #${i}: ${values[0] + values[1]}`);
}