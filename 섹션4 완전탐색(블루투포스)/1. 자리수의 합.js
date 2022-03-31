function solution(n, arr) {
  let answer = 0,
    max = Number.MIN_SAFE_INTEGER;
  // 자릿수의 합 : 정석, 최댓값 저장
  for (let i = 0; i < n; i++) {
    let a = arr[i],
      r = 0;
    while (a !== 0) {
      r += a % 10;
      a = parseInt(a / 10);
    }
    if (max <= r) {
      max = r;
      // 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답
      // 에러
      if (answer < arr[i]) answer = arr[i];
    }
    r = 0;
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
