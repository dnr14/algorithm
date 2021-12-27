let array = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

// 버블 정렬은 선택정렬이랑 같은 O(n^2)이다.
// 복잡도는 똑같지만 실제 수행 시간은 버블이 더 느리다.
// 버블 정렬은 자기자신과 바로 옆 값을 계속 비교 하기때문에 더 느리다

// 1 3 5 7 9 11 13

bubbleSort(array);
function bubbleSort(array) {

  for (let i = array.length - 1; i > 0; --i) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }

  }


  console.log(array);
}
