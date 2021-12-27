let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let leng = input[0];
let result = "";

for (let i = 1; i <= leng; i++) {
  let array = input[i].split(' ').map(x => parseInt(x));
  let x = array[0] + array[1];
  result += x + `\n`;
}

console.log(result);
