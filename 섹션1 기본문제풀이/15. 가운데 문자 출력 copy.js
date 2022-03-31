// 문자열 추출 방법
// substring, ,substr, indexOf, charAt.
// substring(a, b) : string index a 부터 b 까지
// substr(a, b) string index a 부터 b의 수 만큼

function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2); // 중간번호 설정
  if (s.length % 2 == 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  return answer;
}

console.log(solution("study"));
