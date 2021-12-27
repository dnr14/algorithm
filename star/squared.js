console.log(squared(7));
function squared(x) {
  if (x === 1) return 2;
  if (x === 0) return 1;
  return 2 * squared(x - 1);
}
