// timeLine 배열(startTime, endTime)

function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let timeLine = [];
  for (let x of times) {
    timeLine.push([x[0], "s"]);
    timeLine.push([x[1], "e"]);
  }

  timeLine.sort((a, b) => {
    // 'e' 먼저, 's' 나중으로 정렬
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let cnt = 0;
  for (let x of timeLine) {
    if (x[1] === "s") cnt++;
    else cnt--;
    //if (answer < cnt) answer = cnt;
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
