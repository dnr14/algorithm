let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

input.shift();

let ahlpa = {};
let result = false;
let count = 0;

for (let i = 97; i <= 122; ++i) {
  let a = String.fromCharCode(i);
  if (!Object.hasOwnProperty(ahlpa, a)) {
    ahlpa[a] = false;
  }
}

input.forEach(x => {
  let value = [...x];

  for (let i = 0; i < value.length - 1; i++) {
    let currentAhlpa = value[i];
    let afterAhlpa = value[i + 1];

    if (currentAhlpa !== afterAhlpa) {
      if (ahlpa[currentAhlpa] === true && ahlpa[afterAhlpa] === false) {
        ahlpa[afterAhlpa] = true;
      } else if (ahlpa[currentAhlpa] === false && ahlpa[afterAhlpa] === false) {
        ahlpa[currentAhlpa] = true;
        ahlpa[afterAhlpa] = true;
      } else {
        result = true;
      }
    } else {
      ahlpa[currentAhlpa] = true;
    }
  }

  for (const key in ahlpa) {
    ahlpa[key] = false;
  }
  if (result === false) {
    count++;
  }
  result = false;
});
console.log(count);