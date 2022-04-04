function solution(s) {
  let answer,
    sH = new Map(),
    max = Number.MIN_SAFE_INTEGER;

  for (let x of s) {
    // sH map 생성
    if (!sH.get(x)) {
      sH.set(x, 1);
    } else sH.set(x, sH.get(x) + 1);
    // 값이 최대일 경우 x 반환
    if (max < sH.get(x)) {
      max = sH.get(x);
      answer = x;
    }
  }

  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
