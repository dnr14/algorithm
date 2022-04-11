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

console.log(solution(participant, completion));
