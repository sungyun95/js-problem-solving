function solution(s, t) {
  let answer = s.split(t).length - 1;
  // split : t를 기준으로 문자열을 나눈 배열 생성, [ 'COMPUTE', 'P', 'OG', 'AMMING' ]
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
