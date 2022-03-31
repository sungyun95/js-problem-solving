// filter 함수 사용!!

function solution(s) {
  let answer;
  answer = s.filter((word, index) => s.indexOf(word) == index);
  return answer;
}

let str = ["good", "time", "good", "time", "student"];

console.log(solution(str));
