//level 1
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let idx = 0; idx < participant.length; idx++) {
    if (participant[idx] !== completion[idx]) return participant[idx];
  }

  return participant[participant.length - 1];
}

// const participant = ["leo", "kiki", "eden"];
// const completion = ["eden", "kiki"];
// const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
// const completion = ["josipa", "filipa", "marina", "nikola"];
const participant = ["mislav", "stanko", "ana", "mislav"];
const completion = ["stanko", "ana", "mislav"];

// 처음에 해시로 접근했지만 마지막 테스트에서 실패했다.
// 문제 조건 중에 completion은 participant보다 1개가 무조건 적다가 핵심이다.
// 정렬을하고 순차적으로 올라갔을때 미스매치가 나오는 부분이 동명이인이고 뒤에 참가자는 더 이상 탐색하지 않아도 된다.
console.log(solution(participant, completion));
