const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let array = [];

rl.on('line', (line) => {
  array.push(parseInt(line));
}).on('close', () => {

  let input = array.pop();
  let count = 0;
  for (let i = 1; i <= input; i++) {

    let str = [...i.toString()].map(x => parseInt(x));

    if (str.length === 1 || str.length === 2) {
      count++;
    } else {
      let x = str[0] - str[1];
      let result = false;
      for (let i = 0; i < str.length - 1; i++) {
        let _x = str[i] - str[i + 1];
        if (x !== _x) {
          result = true;
        }
      }
      if (result === false) {
        count++;
      }
    }
  }
  console.log(count);
});

