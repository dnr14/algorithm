const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let array = [];

rl.on('line', (line) => {
  array.push(line.charCodeAt());
}).on('close', () => {
  let value = array.pop();
  console.log(value);
});

