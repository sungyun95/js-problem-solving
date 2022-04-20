function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;

  times.sort((a, b) => a[0] - b[0]);

  for (let x of times) {
    let endTime = x[1],
      friendsNum = 1;
    for (let i = times.indexOf(x) + 1; i < times.length; i++) {
      if (times[i][0] < endTime) cnt++;
      else break;
    }
    answer = Math.max(answer, friendsNum);
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
