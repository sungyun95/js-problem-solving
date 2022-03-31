function solution(s) {
  let answer = "";
  // 문자열 탐색 기본 -> for of
  for (let x of s) {
    if (x === "A") {
      answer += "#"; // 문자열 더하기
    } else {
      answer += x;
    }
  }
  return answer;
}

let str = "BANANA";

console.log(solution(str));
