let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().split("\n");


function Obj() {
  this.o = 0;
  this.x = 0;
}
let _oxLeng = parseInt(input.shift());


for (let i = 0; i < _oxLeng; i++) {
  let obj = new Obj();
  let _ox = [...input.shift()];
  let count = 1;
  for (const key in _ox) {
    if (Object.hasOwnProperty.call(_ox, key)) {
      if (_ox[key] === "O") {
        obj.o += count;
        count++;
      } else {
        count = 1;
      }
    }
  }
  console.log(obj.o);
}







