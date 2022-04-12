//level 1
function solution(S) {
  let ans = "";
  const number_obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const setCodeAt = (str) => str.charCodeAt();

  function totalCharCodeAt(strs) {
    let sum = 0;
    for (const str of strs) {
      sum += setCodeAt(str);
    }
    return sum;
  }

  function numberCheck(number) {
    return !Number.isNaN(Number(number) + 1);
  }

  const map = new Map();
  const keys = Object.keys(number_obj);
  for (let idx = 0; idx < keys.length; idx++) {
    const value = keys[idx];
    const len = value.length;
    if (map.has(len)) {
      const array = map.get(len);
      map.set(len, [...array, value]);
    } else {
      map.set(len, [value]);
    }
  }

  let end = S.length > 2 ? 3 : S.length;
  let start_number = "";

  for (let idx = 0; idx < end; idx++) {
    const value = S[idx];
    if (numberCheck(value)) {
      ans += value;
    } else {
      start_number += value;
    }
  }

  if (map.has(start_number.length)) {
    const array = map.get(start_number.length);
    const al = array.find((el) => el === start_number);
    ans += number_obj[al];
    start_number = "";
  }

  // 숫자면 ans에 넣기
  // 1. 숫자가 아니면 앞에꺼 넣고
  // 2. 길이 체크 해당 길이에 값이 있는지 확인
  // 3. 있다면 해당 길이 앞으로 땡겨짐 시작 p1 변경
  // 4. 없다면 1.번 반복

  let p1 = end;

  while (1) {
    const value = S[p1];
    if (numberCheck(value)) {
      ans += value;
    } else {
      start_number += value;
      if (start_number.length >= 3) {
        if (map.has(start_number.length)) {
          const array = map.get(start_number.length);
          const al = array.find((el) => el === start_number);
          // 언디파인드가 들어온다.
          ans += number_obj[al];
          start_number = "";
        }
      }
    }
    p1++;
    if (p1 === S.length) break;
  }
  console.log(ans);

  // var answer = 0;
  // return answer;
}

// 최소 길이 3개
console.log(solution("one4seveneight"));
// console.log(solution("123"));
