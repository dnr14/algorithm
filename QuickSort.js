let array = [3, 7, 8, 1, 5, 9, 6, 10, 2, 4];

// 엇갈림 발생 시 피벗과 엇갈림 수 교차
// 피벗 기준으로 왼쪽은 피벗보다 작은 수들 집합이 된다. 오른쪽은 큰 수의 집합
// 피벗
// l=> 큰 값  <= r 작은 값
// if (r > l) 엇갈림 r과 피벗 교체
quickSort(array, 0, array.length - 1);
function quickSort(array, start, end) {

  let pivot = 0;
  let l = start + 1;
  let r = end;

  while (r > l) {

    while (l <= end && array[pivot] >= array[l]) {
      l++;
    }
    while (r >= l && array[pivot] <= array[r]) {
      r--;
    }

    if (array[pivot] >= array[r]) {
      let temp = array[l];
      array[l] = array[r];
      array[r] = temp;
    }
    if (1) {
      break;
    }

  }


}