// 소수 1과 자기자신
// 값과 2 ~ 값까지 수로 나눴을때 나머지가 0이 안나오면 그 수는 소수다.

// 1 * 16
// 2 * 8
// 4 * 4
// 8 * 2 위에 곱을 뒤집을 형태여서 안해도된다.
// 16 * 1 위에 곱을 뒤집을 형태여서 안해도된다.
// 수의 제곱근 까지 돌면된다.

function solution(arr) {
  const ans = [];

  function reverse(value) {
    value = String(value);
    value = [...value].reduce((acc, cur) => cur + acc);
    console.log("parseInt(value)", parseInt(value));
    return parseInt(value);
  }

  function isPrime(value) {
    for (let idx = 2; idx <= parseInt(Math.sqrt(value)); idx++) {
      if (value % idx === 0) return false;
    }
    return true;
  }

  arr = arr.map((el) => reverse(el));
  arr.forEach((el) => {
    if (isPrime(el) && el !== 1) ans.push(el);
  });
  return ans;
}

const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
