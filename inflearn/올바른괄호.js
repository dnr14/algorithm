function solution(str) {
  let ans = "YES";
  if (str.length % 2 === 1) return "NO";
  const stack = [];

  [...str].forEach((el) => {
    if (el === "(") {
      stack.push(0);
    } else {
      stack.push(1);
    }
  });

  let CONT_LEFT = 0;
  let CONT_RIGHT = 0;

  let before = stack.pop();

  if (before === 0) CONT_LEFT++;
  else CONT_RIGHT++;

  while (1) {
    const current = stack.pop();

    if (current !== undefined && current === 0) CONT_LEFT++;
    else CONT_RIGHT++;

    if (before !== current) {
      if (CONT_LEFT !== 0 && CONT_RIGHT !== 0) {
        if (CONT_LEFT === CONT_RIGHT) {
          CONT_LEFT = 0;
          CONT_RIGHT = 0;
        }
        if (CONT_LEFT > CONT_RIGHT) return "NO";
      }
    }

    before = current;

    if (stack.length === 0) {
      if (CONT_LEFT !== CONT_RIGHT) return "NO";
      break;
    }
  }
  return ans;
}

function solution2(str) {
  const stack = [];

  for (const value of str) {
    if (value === "(") {
      stack.push(value);
    } else {
      if (stack.length === 0) {
        stack.push(")");
      } else {
        stack.pop();
      }
    }
  }

  console.log(stack);
}
// ( 는 0
// ) 는 1
// const str = "(())()";
// const str = "((()))";
// const str = ")())()(";
const str = "(()()))";
// const str = "(())())";
console.log(solution2(str));
