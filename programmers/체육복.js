function solution(n, lost, reserve) {
  const noReserveLost = lost.sort((a, b) => a - b).filter((lost) => !reserve.includes(lost));
  let hasReserve = reserve.sort((a, b) => a - b).filter((reverse) => !lost.includes(reverse));
  
  const finalLost = noReserveLost.filter((lost) => {
    const lend = hasReserve.find((reserve) => Math.abs(reserve - lost) === 1);
    if (!lend) return lost;
    hasReserve = hasReserve.filter((reverse) => reverse !== lend);
  });
  return n - finalLost.length;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
