//level 2
function solution(progresses, speeds) {
  const answer = [];
  let job_queue = [];

  class Job {
    constructor(day, data, speed) {
      this.data = data;
      this.day = day;
      this.speed = speed;
    }
  }

  job_queue = progresses.map((el, idx) => new Job(0, el, speeds[idx], idx));

  let day = 0;

  while (1) {
    day++;
    for (let idx = 0; idx < job_queue.length; idx++) {
      const job = job_queue[idx];
      if (job.data < 100) {
        job.data += job.speed;
        job.day = day;
      }
    }
    if (job_queue.every((job) => job.data >= 100)) break;
  }

  let start_idx = 0;
  while (1) {
    const max_job = job_queue[start_idx];
    let cnt = 0;
    for (let idx = start_idx; idx < job_queue.length; idx++) {
      const job = job_queue[idx];

      if (max_job.day >= job.day) {
        cnt++;
      } else {
        answer.push(cnt);
        start_idx = idx;
        break;
      }

      if (idx + 1 === job_queue.length) {
        answer.push(cnt);
        start_idx = job_queue.length;
      }
    }
    if (job_queue.length === start_idx) break;
  }

  return answer;
}

// const array = [93, 30, 55];
// console.log(solution(array, [1, 30, 5]));
const array = [95, 90, 99, 99, 80, 99];
console.log(solution(array, [1, 1, 1, 1, 1, 1]));
