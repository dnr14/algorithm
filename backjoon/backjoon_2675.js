let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

input.shift();

input.forEach(x => {
  let [leng, str] = x.split(" ");
  let _str = "";
  [...str].forEach(x => {
    for (let i = 0; i < leng; i++) {
      _str += x;
    }
  });
  console.log(_str);
});

