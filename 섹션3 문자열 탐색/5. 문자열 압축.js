// 문자열 압축

function solution(s) {
  let answer = "";
  let letter = "";
  let n = 0;

  for (let x of s) {
    if (x == letter) {
      // 글자가 같다면 count +1
      n++;
    } else {
      // 글자가 다르다면 글자를 바꾸고, answer에 앞 글자의 count + 다음 글자, count 초기화
      letter = x;
      answer += n + 1 + letter;
      n = 0;
    }
  }

  answer = answer.replace(/1/g, ""); // 1 생략

  return answer;
}

let str = "KKHSSSSSSSE";

console.log(solution(str));
