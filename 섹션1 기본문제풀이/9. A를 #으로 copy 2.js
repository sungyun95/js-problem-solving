function solution(s) {
  let answer = s;
  // ** s = s.replace(/A/g, "#");
  answer = answer.replace(/A/g, "#"); // 정규식!!
  // ** console.log(s); // B#N#N#
  return answer; // ** BANANA -> 문자열은 값을 복사함, Array는 주소를 복사함
}

let str = "BANANA";

console.log(solution(str));
