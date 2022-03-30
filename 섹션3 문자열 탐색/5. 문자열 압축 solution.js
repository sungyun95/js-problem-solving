// 강사 풀이법 : i, i+1 비교

function solution(s) {
  let answer = "",
    cnt = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      cnt++;
    } else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt); // String !!
      cnt = 1;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";

console.log(solution(str));
