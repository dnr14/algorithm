function solution(nums) {
  const answer = nums.length / 2;
  const { length } = nums.filter((value, index) => nums.find((num) => num === index));
  
  if (length >= answer) {
    return answer;
  }
  return length;
}
