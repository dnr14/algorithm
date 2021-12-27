const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];



rl.on("line", function (line) {
  input.push(parseInt(line));
}).on('close', () => {

  const [n] = input;

  console.log(fac(n));
  function fac(x) {
    if (x === 1) return 1;
    return x + fac(--x);
  }

});

