let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let value = input[0];
let num = 1;
let str = "";
for (let i = 0; i < value; i++) {
  str += `${num++} \n`;
}

console.log(str);