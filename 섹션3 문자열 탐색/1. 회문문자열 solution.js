// 1. for문
// 새 array만들지말고 걍 s=s.toLowerCase() -> sting 굳이 array 만들필요 X

function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let n = s.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (s[i] !== s[n - 1 - i]) return "NO";
  }

  return answer;
}
// 2. Reverse문

function solution2(s) {
  let answer = "YES";
  s = s.toLowerCase();
  if (s.split("").reverse().join("") !== s) return "NO";

  return answer;
}

let str = "goooG";

console.log(solution(str));
