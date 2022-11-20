function solution(a, b) {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const str = `2016-${a}-${b}`;
  return week[new Date(str).getDay()];
}
