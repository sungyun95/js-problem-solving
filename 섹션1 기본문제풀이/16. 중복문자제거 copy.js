// indexOf의 값 == string의 index값이 일치하면 더하기

function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) == i) {
      answer += s[i];
    }
  }
  return answer;
}
console.log(solution("ksekkset"));
