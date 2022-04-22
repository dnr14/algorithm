function solution(N, stages) {
  var answer = [];
  let stageNFailRate = [];
  for (let stage = 1; stage <= N; stage++) {
    const playerReached = stages.filter((player) => player >= stage).length;
    const playerChallenging = stages.filter(
      (player) => player === stage
    ).length;
    stageNFailRate.push([stage, playerChallenging / playerReached]);
  }
  stageNFailRate.sort((a, b) => b[1] - a[1]);
  answer = stageNFailRate.map((stage) => stage[0]);
  return answer;
}
