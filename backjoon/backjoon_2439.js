let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let [leng] = input;

for (let i = 0, j = leng - 1; i < leng; i++, --j) {

  let str = "";

  for (let sapce = 0; sapce < j; ++sapce) {
    str += " ";
  }
  for (let star = 0; star <= i; star++) {
    str += "*";
  }
  console.log(str);
}

