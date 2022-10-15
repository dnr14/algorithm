function solution(x, y) {
  let answer = '';
  const length = 10;
  
  const x_value = Array.from(x);
  const y_value = Array.from(y);
  
  Array.from({ length }, (_, i) => {
    const str_index = i.toString();
    const x_array_length = x_value.filter((str) => str === str_index).length;
    const y_array_length = y_value.filter((str) => str === str_index).length;
    answer += str_index.repeat(Math.min(x_array_length, y_array_length));
  });
  
  if (answer === '') return '-1';
  else if (answer.match(/[^0]/g) === null) return '0';
  
  return [...answer].sort().reverse().join('');
}
