function solution(meeting) {
  let answer = [];

  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  // [ [ 2, 3 ], [ 1, 4 ], [ 3, 5 ], [ 4, 6 ], [ 5, 7 ] ]

  for (let i = 0; i < meeting.length; i++) {
    let tmp = meeting[i][1],
      cnt = 1;
    for (let j = i; j < meeting.length; j++) {
      if (meeting[j][0] >= tmp) {
        tmp = meeting[j][1];
        cnt++;
      }
    }
    answer.push(cnt);
  }

  return Math.max(...answer);
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

let arr2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr2));
