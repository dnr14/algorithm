let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim();
input = [...input];

const ahlpa = {};
for (let i = 97; i <= 122; i++) {

  let props = String.fromCharCode(i).toUpperCase();
  if (!Object.hasOwnProperty(ahlpa, props)) {
    ahlpa[props] = 0;
  }
}
ahlpa["A"] = 3;
ahlpa["B"] = 3;
ahlpa["C"] = 3;

ahlpa["D"] = 4;
ahlpa["E"] = 4;
ahlpa["F"] = 4;

ahlpa["G"] = 5;
ahlpa["H"] = 5;
ahlpa["I"] = 5;

ahlpa["J"] = 6;
ahlpa["K"] = 6;
ahlpa["L"] = 6;

ahlpa["M"] = 7;
ahlpa["N"] = 7;
ahlpa["O"] = 7;

ahlpa["P"] = 8;
ahlpa["Q"] = 8;
ahlpa["R"] = 8;
ahlpa["S"] = 8;

ahlpa["T"] = 9;
ahlpa["U"] = 9;
ahlpa["V"] = 9;

ahlpa["W"] = 10;
ahlpa["X"] = 10;
ahlpa["Y"] = 10;
ahlpa["Z"] = 10;

let value = 0;

for (let i = 0; i < input.length; i++) {
  if (Object.hasOwnProperty.call(ahlpa, input[i])) {
    value += ahlpa[input[i]];
  }
}
console.log(value);
