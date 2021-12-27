const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let array = [];

rl.on("line", function (line) {
  array.push(line);
}).on('close', () => {

  let input = array.pop();

  if (input < 10) {
    input = "0" + input;
  }

  let _input = input;
  let idx = 0;


  while (1) {
    let x = [..._input].map(x => parseInt(x));
    let value = x[0] + x[1];
    value = [...value.toString()];
    if (value.length < 2) {
      _input = x[1].toString() + value[0]
    } else {
      _input = x[1].toString() + value[1];
    }
    idx++;
    if (_input === input) break;
  }
  console.log(idx);


});


