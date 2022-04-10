// 아이디는 길이 3~15자
// 알파벳 소문자, 숫자, - _ .
// 처음 끝 . 사용 x 연속 사용 x
function solution(new_id) {
  var answer = new_id;

  if (answer !== "") {
    answer = answer
      .toLocaleLowerCase()
      .replace(/[^a-z-_.0-9]/g, "")
      .replace(/[.]{2,}/g, ".");
    if (answer.startsWith(".")) {
      answer = answer.slice(1);
    }
    if (answer.endsWith(".")) {
      answer = answer.slice(0, answer.length - 1);
    }
  }

  if (answer.length === 0) {
    answer = "a";
  }

  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
  }

  if (answer.endsWith(".")) {
    answer = answer.slice(0, answer.length - 1);
  }

  const last = answer[answer.length - 1];
  if (answer.length === 1) {
    answer = answer + last + last;
  } else if (answer.length === 2) {
    answer += last;
  }

  return answer;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
// console.log(solution("z-+.^."));
// console.log(solution("=.="));
// console.log(solution("123_.def"));
// console.log(solution("abcdefghijklmn.p"));
