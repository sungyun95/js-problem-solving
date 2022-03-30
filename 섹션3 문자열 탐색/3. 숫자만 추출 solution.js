// 정석 : isNaN 활용, answer에 더하고 parseInt

function solution(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";

console.log(solution(str));

// 조건 : parseInt 쓰지 않기

function solution2(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  return answer;
}
