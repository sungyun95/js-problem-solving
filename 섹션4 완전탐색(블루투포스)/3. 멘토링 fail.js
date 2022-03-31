// hard, fail

function solution(arr) {
  let answer = [],
    n = arr[0].length,
    m = arr.length;

  let menti = [];

  for (let i = 1; i <= n; i++) {
    // 1, 2, 3, 4 의 멘티들 찾기
    menti.push(i);
    for (let x of arr) {
      menti.push(x.filter((e, index) => index > x.indexOf(i)));
    }

    console.log(menti);

    for (let k = 1; k <= n; k++) {
      let realMenti = [menti[0]];
      // k = 1
      // 학생 1 ~ 4(n) 중 공통되는 값이 있으면 true
      for (let j = 1; j < menti.length; j++) {
        // menti[1] ~ [3] 중에서
        if (menti[0] !== k && menti[j].includes(k)) {
          if (!realMenti.includes(k)) {
            realMenti.push(k);
          }
        } else {
          realMenti.splice(1);
        }
      }
      realMenti = [];
    }
    menti = [];
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
