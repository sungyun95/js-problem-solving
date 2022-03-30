// 회문 문자열

function solution(s) {
  let answer = "YES";
  lowerStringArray = s.toLowerCase().split(""); // 문자열 -> 소문자 변환 + 배열
  n = lowerStringArray.length; // 문자의 자릿수

  for (let i = 0; i < Math.floor(n / 2); i++) {
    // 배열의 대칭에 있는 문자가 같아야 함 -> 홀수일때, 가운데 상관X
    lowerStringArray[i] !== lowerStringArray[n - 1 - i] && (answer = "NO");
  }

  return answer;
}

let str = "goooG";

console.log(solution(str));
