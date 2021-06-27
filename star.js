class Star {
  constructor(size) {
    //size를 초기화를 안해주면 제일 작은 별 삼각형 부터 시작
    // 음수가 들어오는거 방지
    size === undefined || size < 0
      ? this.rowleng = 3
      : this.rowleng = size;
    // row 중간 값 
    this.mid = Math.floor((0 + this.rowleng) / 2);
    // 공백 찍는 초기값
    this.space = this.mid;
  }
  resultFullStar() {
    // result함수를 통해서 사용자가 엉뚱한 인수를 넣는걸 방지 한다.
    // 사이즈가 짝수면 안된다.
    if (this.validation()) return;
    this.#getFullStar(this.rowleng, this.space, this.mid);
  }
  resultHalfStar() {
    if (this.validation()) return;
    this.#getHalfStar(this.rowleng, this.space, this.mid);
  }
  validation() {
    if (this.rowleng % 2 === 0) {
      console.log("사이즈를 홀수로 초기화 해주세요.");
      return true;
    }
    return false;
  }

  // #은 private 접근자
  // leng은 열의 높이이다.
  // spaceRotation은 공백을 찍는 횟수를 표기
  // mid는 중간 값
  // starRotation은 별을 찍는 횟수를 표기
  // count 열에 끝에 왔는지 확인,중간에 왔는지 확인
  #getFullStar(leng, spaceRotation, mid, starRotation = 1, count = 0) {
    let str = "";
    let _spaceRotation = spaceRotation;
    while (_spaceRotation-- > 0) {
      str += " ";
    }
    let _starRotation = starRotation;
    while (_starRotation-- > 0) {
      str += "*";
    }
    //count는 제로베이스 index이고
    //leng은 1베이스 index이다.
    //leng에 -1를하여서 똑같은 제로 베이스로 맞쳐준다.
    console.log(str);
    if (count === leng - 1) return;
    mid > count
      ? this.#getFullStar(leng, spaceRotation - 1, mid, starRotation + 2, count + 1)
      : this.#getFullStar(leng, spaceRotation + 1, mid, starRotation - 2, count + 1);
  }

  #getHalfStar(leng, spaceRotation, mid, starRotation = 1, count = 0) {
    let str = "";
    let _spaceRotation = spaceRotation;
    while (_spaceRotation-- > 0) {
      str += " ";
    }
    let _starRotation = starRotation;
    while (_starRotation-- > 0) {
      str += "*";
    }
    //count는 제로베이스 index이고
    //leng은 1베이스 index이다.
    //leng에 -1를하여서 똑같은 제로 베이스로 맞쳐준다.
    console.log(str);
    if (count === mid) return;
    this.#getHalfStar(leng, spaceRotation - 1, mid, starRotation + 2, count + 1);
  }
}
const star = new Star(11);
star.resultFullStar();
star.resultHalfStar();


