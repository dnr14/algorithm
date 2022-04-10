function solution(nums) {
  var answer = 0;
  const { length } = nums;
  const set = [];

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        set.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  function isPrime(value) {
    for (let idx = 2; idx < parseInt(value / 2); idx++) {
      if (value % idx === 0) return false;
    }
    return true;
  }

  for (const iterator of set) {
    if (iterator === 1) continue;
    if (isPrime(iterator)) answer++;
  }

  return answer;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
