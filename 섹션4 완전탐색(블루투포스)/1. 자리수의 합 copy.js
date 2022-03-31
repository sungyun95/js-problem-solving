// 최댓값을 찾으려면 max = Number.MIN~ 설정

function solution(n, arr) {
  let answer = 0,
    max = Number.MIN_SAFE_INTEGER;
  // 자릿수의 합 : 정석, 최댓값 저장
  for (let x of arr) {
    // 1. 각 숫자의 자리수 합
    let tmp = x,
      sum = 0; // 임시변수
    while (tmp) {
      // tmp가 0(false)이되면 종료
      sum += tmp % 10;
      tmp = parseInt(tmp / 10); // Math.floor, parseInt
    }

    // 2. reduce 함수
    // let sum = x.toString().split('').reduce((a,b) => a+Number(b), 0)

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum == max) {
      if (x > answer) answer = x;
    }
    sum = 0;
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
