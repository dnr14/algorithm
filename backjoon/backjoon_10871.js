let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let [x, values] = input;
let [leng, y] = x.split(' ').map(x => parseInt(x));
values = values.split(' ').map(x => parseInt(x));

let array = [];
for (let i = 0; i < leng; i++) {
  if (values[i] < y) {
    array.push(values[i]);
  }
}

console.log(...array);




