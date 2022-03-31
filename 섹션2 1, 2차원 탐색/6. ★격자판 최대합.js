// hard
function solution(arr) {
  let answer;
  let n = arr.length;
  let sum = [];

  // 행 의합
  let col = arr.map((x) => x.reduce((acc, cur) => acc + cur));
  console.log(col);

  // 열 의합
  let row = Array.from({ length: n }, () => 0);
  for (let x of arr) {
    for (let i = 0; i < n; i++) {
      row[i] += x[i];
    }
  }
  console.log(row);

  // 대각선의 합
  let dia = [0, 0];
  // arr[0][0] arr[1][1],,,,
  for (let i = 0; i < n; i++) {
    dia[0] += arr[i][i];
  }
  // arr[0][5] arr[1][4]
  for (let j = 0; j < n; j++) {
    dia[1] += arr[j][n - j - 1];
  }
  console.log(dia);
  // 그 중 최댓값 Math.max(...sum)
  answer = Math.max(...col, ...row, ...dia);
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
