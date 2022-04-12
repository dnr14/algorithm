function solution(S, T) {
  let T_SUM = 0;
  let ans = 0;

  function getCharCodeAt(str) {
    return str.charCodeAt();
  }

  for (const str of T) {
    T_SUM += getCharCodeAt(str);
  }

  let SUM = 0;
  for (let idx = 0; idx < T.length; idx++) {
    SUM += getCharCodeAt(T[idx]);
  }

  if (SUM === T_SUM) {
    ans++;
  }
  let p1 = 0;
  let p2 = T.length;

  while (1) {
    const befor_str_num = getCharCodeAt(S[p1]);
    const current_str_num = getCharCodeAt(S[p2]);

    SUM = SUM - befor_str_num + current_str_num;

    if (T_SUM === SUM) {
      ans++;
    }
    p1++;
    p2++;

    if (p2 === S.length) break;
  }

  return ans;
}

const S = "bacaAacba";
const T = "abc";
console.log(solution(S, T));

// const map1 = new Map([
//   ["a", 1],
//   ["b", 1],
//   ["c", 1],
// ]);

// const map2 = new Map([
//   ["b", 1],
//   ["a", 1],
//   ["c", 1],
// ]);

// let isTrue = true;
// for (const [key] of map1) {
//   if (!map2.has(key)) {
//     isTrue = false;
//     break;
//   }
// }
// if (isTrue) console.log("같다.");
// else console.log("틀려");
