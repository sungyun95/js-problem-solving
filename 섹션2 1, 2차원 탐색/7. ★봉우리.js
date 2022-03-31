// hard

function solution(arr) {
  // arr[n][m] 비교 : arr[n-1][m], arr[n][m-1], arr[n][m+1], arr[n+1][m] -> count++
  let answer = 0,
    n = arr.length, // 5
    zeroArr = Array.from({ length: n + 2 }, () => 0);
  // 방법 1 : 새 array를 만들고 비교
  // - newArr 생성
  let newArr = arr.map((a) => {
    a.push(0);
    a.unshift(0);
    return a;
  });
  newArr.push(zeroArr);
  newArr.unshift(zeroArr);
  // 비교
  for (let i = 1; i <= n; i++) {
    // i = 1~5
    for (let j = 1; j <= n; j++) {
      if (
        newArr[i][j] > newArr[i - 1][j] && // 상
        newArr[i][j] > newArr[i][j - 1] && // 좌
        newArr[i][j] > newArr[i][j + 1] && // 우
        newArr[i][j] > newArr[i + 1][j] // 하
      ) {
        answer++;
      }
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(solution(arr));
