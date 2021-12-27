let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString();
let array = [];
let _array = Array(26).fill(-1);
for (let i = 97; i <= 122; i++) {
  array.push(String.fromCharCode(i));
}

for (let i = 0; i < array.length; ++i) {
  let char = array[i];
  let idx = input.indexOf(char);
  _array[i] = idx;
}

console.log(..._array);