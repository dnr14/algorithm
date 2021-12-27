let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim();

input = input.toLowerCase();

let obj = {};
for (let i = 97; i <= 122; i++) {
  if (!obj.hasOwnProperty(String.fromCharCode(i))) {
    obj[String.fromCharCode(i)] = 0;
  }
}

[...input].forEach(x => {
  if (obj.hasOwnProperty(x)) {
    obj[x] += 1;
  }
});

let max = 0;
let ahlpa = "";
for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    let value = obj[key];
    if (value > max) {
      max = value;
      ahlpa = key;
    } else if (value === max) {
      max = value;
      ahlpa = "?";
    }
  }
}

console.log(ahlpa.toUpperCase());
