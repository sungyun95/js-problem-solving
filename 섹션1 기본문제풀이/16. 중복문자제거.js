function solution(s) {
  let answer = "";
  for (let x of s) {
    let idx = s.indexOf(x);
    if (!answer.includes(s[idx])) {
      answer += s[idx];
    }
  }
  return answer;
}
console.log(solution("ksekkset"));
