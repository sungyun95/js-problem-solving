// 숫자만 추출

function solution(str) {
  let answer;
  let numArr = str.split("").filter((e) => !Number.isNaN(parseInt(e))); // typeOf, NaN = number ? 헷갈렸음...
  answer = numArr.join("");

  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";

console.log(solution(str)); // 208
