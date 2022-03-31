let iterCount = 0;

function solution(a, b, c) {
  let answer;

  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;

  return answer;
}

console.time();
console.log(solution(2, 5, 1));
console.timeEnd();

if (iterCount) console.log("iter count", iterCount);
