// 강사 풀이법 보고 직접 코드 작성
// for(i=1 ~ 4){
//  for(j=1 ~ 4)
// }
// pi, pj : i 와 j 의 등수
// pi < pj 의 횟수 count, count가 M과 같다면 멘토 자격 有

function solution(arr) {
  let answer = [],
    n = arr[0].length,
    m = arr.length;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      if (i !== j) {
        for (let x of arr) {
          if (x.indexOf(i) < x.indexOf(j)) cnt++;
        }
      }
      if (cnt == m) answer.push([i, j]);
      cnt = 0;
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
