function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].length > answer.length) {
      answer = s[i];
    }
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
