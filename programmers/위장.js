//level 2
function solution(clothes) {
  const map = new Map();

  for (let idx = 0; idx < clothes.length; idx++) {
    const [_, 부위] = clothes[idx];
    map.set(부위, ["none"]);
  }

  for (let idx = 0; idx < clothes.length; idx++) {
    const [의상, 부위] = clothes[idx];
    if (map.has(부위)) {
      map.set(부위, [의상, ...map.get(부위)]);
    }
  }

  let sum = 1;

  for (const iterator of map.values()) {
    sum *= iterator.length;
  }
  return sum - 1;
}

// const array = [
//   ["crowmask", "face"],
//   ["bluesunglasses", "face"],
//   ["smoky_makeup", "face"],
// ];

// console.log(solution(array));

const array = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
console.log(solution(array));
