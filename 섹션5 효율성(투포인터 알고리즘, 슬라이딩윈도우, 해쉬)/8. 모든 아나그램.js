// hard

// 이중for문...
function solution(s, t) {
  let answer = 0,
    sub = "", // 부분문자열
    rt = t.length;

  // 슬라이딩 윈도우 : 부분 문자열 구함
  for (let i = 0; i < t.length; i++) sub += s[i];

  // 비교
  while (rt <= s.length) {
    let sH = new Map();
    for (let x of sub) {
      if (sH.has(x)) sH.set(x, sH.get(x) + 1);
      else sH.set(x, 1);
    }

    for (let x of t) {
      if (!sH.has(x) || sH.get(x) === 0) {
        answer--;
        break;
      } else sH.set(x, sH.get(x) - 1);
    }
    answer++;
    sub = sub.substring(1);
    sub += s[rt++];
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";

console.log(solution(a, b));
