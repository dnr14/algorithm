const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let array = [];
rl.on('line', (line) => {
  array.push(parseInt(line));
}).on('close', () => {

  let _array = array;
  let [A, B, C] = _array;
  let result = 0;
  if ((100 <= A && A < 1000) && (100 <= B && B < 1000) && (100 <= C && C < 1000)) {
    result = A * B * C;
  }
  let obj = {};
  for (let i = 0; i < 10; i++) {
    if (!obj[i])
      obj[i] = 0;
  }

  result = [...result.toString()];
  result.forEach(x => {
    if (Object.getOwnPropertyDescriptor(obj, x)) {
      obj[x] += 1;
    }
  });

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      console.log(obj[key]);
    }
  }
});

