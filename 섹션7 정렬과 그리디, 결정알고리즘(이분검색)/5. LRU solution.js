function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    // x가 HIT인지 Miss인지 확인
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i; // HIT된 지점(idx) 저장
    // MISS일 경우, 멘 끝에서 부터 뒤로 당기기
    if (pos === -1) {
      for (let j = size - 1; j >= 1; j--) {
        answer[j] = answer[j - 1];
      }
      // HIT일 경우, HIT된 지점부터 뒤로 당기기
    } else {
      for (let j = pos; j >= 1; j--) {
        answer[j] = answer[j - 1];
      }
    }
    answer[0] = x;
  });
  return answer;
}

function solution2(size, arr) {
  let answer = [];
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      answer.unshift(x);
      if (answer.length > size) answer.pop();
    } else {
      answer.splice(pos, 1);
      answer.unshift(x);
    }
  });
  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
