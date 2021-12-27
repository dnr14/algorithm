let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString();

const ling_count = Number(input);
let count = 0;
let answer = [];

function hanoi(ling_count, start, support, finish) {
  if (ling_count === 0) return;
  if (ling_count === 1) {
    answer.push([start, finish]);
    count++;
    return;
  }
  hanoi(ling_count - 1, start, finish, support);
  answer.push([start, finish]);
  count++;
  hanoi(ling_count - 1, support, start, finish);
}
hanoi(ling_count, 1, 2, 3);
console.log(count);
console.log(answer.map((element) => element.join(" ")).join("\n"));
