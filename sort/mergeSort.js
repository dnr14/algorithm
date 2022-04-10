const sorted = [];

// 시작 중간 끝
function merge(arr, m, middle, n) {
  let i = m;
  let j = middle + 1;
  let k = m;

  while (i <= middle && j <= n) {
    if (arr[i] <= arr[j]) {
      sorted[k] = arr[i];
      i++;
    } else {
      sorted[k] = arr[j];
      j++;
    }
    k++;
  }
  if (i > middle) {
    for (let t = j; t <= n; t++) {
      sorted[k] = arr[t];
      k++;
    }
  } else {
    for (let t = i; t <= middle; t++) {
      sorted[k] = arr[t];
      k++;
    }
  }

  for (let t = m; t <= n; t++) {
    arr[t] = sorted[t];
  }
}

function mergeSort(arr, m, n) {
  if (m < n) {
    const middle = Math.floor((m + n) / 2);
    mergeSort(arr, m, middle);
    mergeSort(arr, middle + 1, n);
    merge(arr, m, middle, n);
  }
}

function main() {
  const array = [7, 6, 5, 8, 3, 5, 9, 1];
  mergeSort(array, 0, array.length - 1);
  console.log(array.join(" "));
}
main();
