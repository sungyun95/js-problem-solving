// 2중 for 문을 한번만 돌려서 가로, 세로 // 대각선 구하기
// sum1, sum2, answer 비교

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER,
    n = arr.length,
    sum1 = 0,
    sum2 = 0;

  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j]; // 세로 합
      sum2 += arr[j][i]; // 가로 합
    }
    answer = Math.max(answer, sum1, sum2);
  }

  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i]; // 왼쪽->오른쪽 대각선
    sum2 += arr[i][n - i - 1]; // 오른쪽->왼쪽 대각선
  }
  answer = Math.max(answer, sum1, sum2);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
