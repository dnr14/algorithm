let array = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

// 10 + 9 + 8 ... 1
// 등차 수열
// 10 * (10 + 1) / 2 = 55
// N * (N+1) / 2
// N앞 뒤에 오는 +1 /2는 N이 클수록 의미가 없다.
// O(N*M); O(n^2)이다.

selectionSort(array);
function selectionSort(array) {

  for (let i = 0; i < array.length; i++) {
    let min = 9999;
    let index = 0;
    let temp = 0;
    for (let j = i; j < array.length; j++) {
      if (min > array[j]) {
        min = array[j];
        index = j;
      }
    }
    temp = array[i];
    array[i] = min;
    array[index] = temp;
  }
  return console.log(array);
}



