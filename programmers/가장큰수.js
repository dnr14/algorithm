function solution(numbers) {
  if (numbers.every((el) => el === 0)) {
    return "0";
  }

  numbers = numbers
    .map((el) => String(el))
    .sort((a, b) => b + a - (a + b))
    .join("");

  return numbers;
}

// const array = [3, 30, 34, 5, 9];
// const array = [6, 10, 2];
const array = [0, 0, 0];
console.log(solution(array));
