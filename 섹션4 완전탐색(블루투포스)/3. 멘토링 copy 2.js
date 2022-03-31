// 강사 풀이법 + 코드

function solution(arr) {
  let answer = 0,
    m = arr.length,
    n = test[0].length;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        // 행
        let pi,
          pj = 0;
        for (let s = 0; s < n; s++) {
          // 열
          if (arr[k][s] == i) pi = s;
          if (arr[k][s] == j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt == m) answer++;
    }
  }
  return answer;
}

// 학생수 N = arr[0].length, 테스트 수 M = arr.length
let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
