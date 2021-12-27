const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let array = [];
rl.on('line', (line) => {
  if (line !== " ") {
    array.push(line.trim());
  }
}).on('close', () => {
  if (array.length !== 0) {
    let result = array.pop();
    result = result.split(" ");
    console.log(result.length);
  } else {
    console.log(0);
  }
});




