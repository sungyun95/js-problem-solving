// ASCII 코드 풀이 -> 내가 품
// 대문자 + 32 = 소문자

function solution(s) {
  let answer = "";
  for (x of s) {
    let ascii = x.charCodeAt();
    if (ascii >= 97 && ascii <= 122) {
      answer += String.fromCharCode(ascii - 32);
    } else answer += x;
  }
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
