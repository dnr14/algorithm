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

  let max = -1;
  let idx = 0;
  for (let i = 0; i < _array.length; i++) {
    if (max <= _array[i] && _array[i] < 100) {
      max = _array[i];
      idx = i;
    }
  }

  console.log(`${max}`);
  console.log(`${idx + 1}`);

});