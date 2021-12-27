// const array = Array(10001).fill(false);
const array = Array.from({ length: 10001 }, (_, index) => index);
for (let i = 1; i < 10001; i++) {
  d(i);
}
function d(x) {
  let result = x;
  const _array = [...x.toString()].map(x => parseInt(x));
  _array.forEach(x => {
    result += x;
  });

  if (array.hasOwnProperty(result)) {
    array[result] = true;
  }
}

// 재귀적으로 1000까지느 가능한데 10000은 max callstack이 뜬다.
// d(1);
// function d(x) {
//   if (x >= 1000) return;
//   let result = x;
//   const _array = [...x.toString()].map(x => parseInt(x));
//   _array.forEach(x => {
//     result += x;
//   });

//   if (array.hasOwnProperty(result)) {
//     array[result] = true;
//   }
//   d(++x);
// }

for (let i = 1; i < array.length; i++) {
  if (array[i] !== true) {
    console.log(array[i]);
  }
}


