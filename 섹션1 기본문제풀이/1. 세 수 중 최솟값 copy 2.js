let iterCount = 0;

function solution(a, b, c) {
  return Math.min(a, b, c); // 최솟값 구하는 함수
}

console.time();
console.log(solution(2, 5, 1));
console.timeEnd();

if (iterCount) console.log("iter count", iterCount);
