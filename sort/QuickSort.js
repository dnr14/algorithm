// let array = [3, 7, 8, 1, 5, 9, 6, 10, 2, 4];
// let array = [1, 1, 55, 8, 7, 6, 4, 3, 2, 9];
let array = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

// 엇갈림 발생 시 피벗과 엇갈림 수 교차
// 피벗 기준으로 왼쪽은 피벗보다 작은 수들 집합이 된다. 오른쪽은 큰 수의 집합
// l=> 큰 값  <= r 작은 값
// if (r > l) 엇갈림 r과 피벗 교체
quickSort(array, 0, array.length - 1);
console.log(array);
function quickSort(array, start, end) {
  if (start >= end) return;

  let pivot = start;
  let l = start + 1;// 큰값 
  let r = end;// 작은 값 
  let temp;

  while (r > l) {

    // 오름 차순
    while (l < end && array[l] <= array[pivot]) {
      l++;
    }
    //  피벗보다  작은 값이 없을 때
    while (array[r] >= array[pivot] && r > start) {
      r--;
    }

    // 내림 차순
    // while (l < end && array[l] <= array[pivot]) {
    //   l++;
    // }
    // //  피벗보다  작은 값이 없을 때
    // while (array[r] >= array[pivot] && r > start) {
    //   r--;
    // }

    if (r > l) {
      temp = array[l];
      array[l] = array[r];
      array[r] = temp;
    } else {
      temp = array[pivot];
      array[pivot] = array[r];
      array[r] = temp;
      // quickSort(array, pivot, r - 1);
      // quickSort(array, l, end);
    }
  }
  quickSort(array, pivot, r - 1);
  quickSort(array, l, end);
}

