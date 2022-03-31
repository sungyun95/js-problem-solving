let iterCount = 0;

function solution(a, b, c) {
  let answer;

  if (a < b) {
    if (a < c) {
      answer = a;
    } else {
      answer = c;
    }
  } else {
    if (b < c) {
      answer = b;
    } else {
      answer = c;
    }
  }

  return answer;
}

console.time();
console.log(solution(2, 5, 1));
console.timeEnd();

if (iterCount) console.log("iter count", iterCount);
