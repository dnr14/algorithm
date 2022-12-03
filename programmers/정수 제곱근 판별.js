function solution(n) {
  let num = Math.sqrt(n);
  if (num % 1 === 0){
    num +=1;
    return num**2;
  }
  else return -1;
}
