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
  let _arr = [];

  for (const key in _array) {
    let value = _array[key] % 42;
    _arr.push(value);
  }
  const set = new Set(_arr);
  console.log(set.size);
});