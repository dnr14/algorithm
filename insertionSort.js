
let array = [26, 5, 37, 1, 61, 11, 59, 15, 48, 19];

insertionSort(array);

for (const key in array) {
  console.log(array[key]);
}

function insertionSort(array) {

  for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < i; j++) {
      if (array[j] > array[i]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    console.log(...array.slice(0, i + 1));
  }
  console.log(...array);
}


