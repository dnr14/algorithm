let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim();

let _array = [];
const regex = /(c=|c-|dz=|d-|lj|nj|s=|z=)/g;

while (1) {
  let pattern = regex.exec(input);
  if (pattern === null) break;
  let [croatiaAhlpa] = pattern;
  _array.push(croatiaAhlpa.length);
}

let result = input.length;
for (const leng of _array) {
  result -= leng;
}
console.log(_array.length + result);


