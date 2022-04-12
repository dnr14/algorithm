//level 1
function solution(numbers, hand) {
  let result = "";

  const KEY_PAD = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["*", "0", "#"],
  ];
  const { length } = KEY_PAD;

  const right_hand = {
    name: "right",
    position: [3, 2],
  };
  const left_hand = {
    name: "left",
    position: [3, 0],
  };

  function getFind(target) {
    for (let row = 0; row < length; row++) {
      for (let col = 0; col < length; col++) {
        const number = KEY_PAD[row][col];
        if (number === target) return [row, col];
      }
    }
  }

  function setLefthand(position) {
    left_hand.position = position;
  }
  function setRighthand(position) {
    right_hand.position = position;
  }

  function getCost(hand, target_number) {
    const { name, position } = hand;
    const [row, col] = position;

    if (name === "left") {
      let 비용 = 0;
      let i = row;
      let j = col;
      if (j !== 1) {
        j++;
        비용 = 1;
      }

      let fleg = false;

      while (1) {
        const number = KEY_PAD[i][j];
        if (number === target_number) return [비용, [i, j], number];

        if (fleg === false) i++;
        else i--;

        비용++;

        if (i > 3) {
          fleg = true;
          i = row;
          if (col === 1) 비용 = 0;
          else 비용 = 1;
        }
      }
    }

    if (name === "right") {
      let 비용 = 0;
      let i = row;
      let j = col;
      if (j !== 1) {
        j--;
        비용 = 1;
      }

      let fleg = false;

      while (1) {
        const number = KEY_PAD[i][j];
        if (number === target_number) return [비용, [i, j], number];
        if (fleg === false) i++;
        else i--;

        비용++;

        if (i > 3) {
          fleg = true;
          i = row;
          if (col === 1) 비용 = 0;
          else 비용 = 1;
        }
      }
    }
  }

  for (let idx = 0; idx < numbers.length; idx++) {
    const number = String(numbers[idx]);
    let position;
    switch (numbers[idx]) {
      case 1:
      case 4:
      case 7:
        position = getFind(number);
        setLefthand(position);
        result += "L";
        break;
      case 3:
      case 6:
      case 9:
        position = getFind(number);
        setRighthand(position);
        result += "R";
        break;
      default:
        const [left_cost, left_position] = getCost(left_hand, number);
        const [right_cost, right_position] = getCost(right_hand, number);

        if (left_cost === right_cost) {
          if (hand === "left") {
            result += "L";
            setLefthand(left_position);
          } else {
            result += "R";
            setRighthand(right_position);
          }
        } else if (left_cost > right_cost) {
          result += "R";
          setRighthand(right_position);
        } else {
          result += "L";
          setLefthand(left_position);
        }
        break;
    }
  }

  return result;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
// 결과 LRLLLRLLRRL
// 정답 LRLLLRLLRRL
// console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
// 결과 LRLLRRLLLRR
// 정답 LRLLRRLLLRR
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
// 결과 LLRLLRLLRL
// 정답 LLRLLRLLRL
