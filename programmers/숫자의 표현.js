function solution(value) {
  let answer = 0;
  
  Array.from({ length : value }, (_, idx) => {
    if (checksum(idx + 1, 0, value)) answer += 1;
  });
  
  return answer;
}

function checksum(cur, sum, value) {
  if (sum === value) {
    return true;
  }
  if (sum > value) {
    return false;
  }
  return checksum(cur + 1, sum + cur, value);
}
