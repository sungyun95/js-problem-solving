function solution(n) {
  let answer;
  answer = Math.ceil(n / 12); // Math.ceil(올림), floor(버림), round(반올림), sqrt(제곱근)
  return answer;
}

console.time();
console.log(solution(178));
console.timeEnd();
