function solution(str, searchStr) {
  const answer = [];
  const len = str.length;

  const first_index = 0;
  const last_index = len - 1;

  function check(arr, idx, value, searchStr) {
    if (value === searchStr) arr[idx] = 0;
  }

  for (let i = 0; i < len; i++) {
    const value = str[i];
    if (first_index === i) {
      answer[i] = str.indexOf(searchStr);
      check(answer, i, value, searchStr);
    }

    if (last_index === i) {
      answer[i] = str.indexOf(searchStr, -1);
      check(answer, i, value, searchStr);
    }

    if (last_index !== i && first_index !== i) {
      const answer = str.slice(0, i + 1);
      const right_arr = str.slice(i);
      let left = Number.MIN_SAFE_INTEGER;
      let right = Number.MIN_SAFE_INTEGER;

      for (let i = answer.length - 1; i >= 0; i--) {
        const el = answer[i];
        if (el === searchStr) {
          left = answer.length - i - 1;
          break;
        }
      }

      for (let i = 0; i < right_arr.length; i++) {
        const el = right_arr[i];
        if (el === searchStr) {
          right = i;
          break;
        }
      }
      answer[i] = right;
      if (right > left) answer[i] = left;
    }
  }
  return answer.join(" ");
}
// console.log(solution("teachermode", "e"));

function solution2(str, searchStr) {
  const len = str.length;
  const answer = [];
  const right_arr = [];
  let p = 1000;

  for (let i = 0; i < len; i++) {
    const value = str[i];
    if (value !== searchStr) {
      p++;
    } else {
      p = 0;
    }
    answer.push(p);
  }

  p = 1000;

  for (let y = len - 1; y >= 0; y--) {
    const value = str[y];
    if (value !== searchStr) p++;
    else p = 0;
    right_arr[y] = p;
  }

  for (let i = 0; i < len; i++) {
    if (answer[i] > right_arr[i]) answer[i] = right_arr[i];
  }

  return answer.join(" ");
}
console.log(solution2("teachermode", "e"));
