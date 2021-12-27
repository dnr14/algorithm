let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let leng = input[0];

for (let i = 0; i < leng; i++) {
  str = "";
  for (let j = 0; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}