//level 1
function solution(id_list, report, k) {
  const ans = [];
  const report_map = new Map();
  const ID_MAP = new Map();
  const set = new Set(report);

  for (const report of set) {
    const [신고자, 타겟] = report.split(" ");
    report_map.set(
      타겟,
      report_map.get(타겟) ? [...report_map.get(타겟), 신고자] : [신고자]
    );
  }
  for (const [key, values] of report_map) {
    if (values.length >= k) {
      for (const id of values) {
        ID_MAP.set(id, ID_MAP.get(id) ? ID_MAP.get(id) + 1 : 1);
      }
    }
  }

  for (let idx = 0; idx < id_list.length; idx++) {
    const id = id_list[idx];
    const count = ID_MAP.get(id);
    ans.push(count ? count : 0);
  }
  return ans;
}

// 유저 목록
const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;

// const id_list = ["con", "ryan"];
// const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
// const k = 3;
console.log(solution(id_list, report, k));
