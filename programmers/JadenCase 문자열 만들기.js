function solution(s) {
  return s.toLowerCase()
    .split(' ')
    .map(i => i.charAt(0).toUpperCase() + i.slice(1))
    .join(' ')
}
