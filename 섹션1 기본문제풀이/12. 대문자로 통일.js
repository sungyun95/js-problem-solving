// 기본 : s.toUpperCase()
// 다른 방법 풀이

function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x == x.toLowerCase()) {
      x = x.toUpperCase();
      answer += x;
    } else {
      answer += x;
    }
  }
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
