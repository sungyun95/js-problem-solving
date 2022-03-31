// 아스키코드로 구분(그냥 개념정도)
// 대문자 65~90 소문자 97~122

function solution(s) {
  let answer = 0;
  for (let x of s) {
    let ascii = x.charCodeAt();
    if (ascii >= 65 && ascii <= 90) {
      answer++;
    }
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
