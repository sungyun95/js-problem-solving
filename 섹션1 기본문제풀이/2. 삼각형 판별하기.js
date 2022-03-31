// :: 가장 긴 막대 길이 < 나머지 두 막대 길이의 합 ? "Yes" : "No"

function solution(a, b, c) {
  let max = Math.max(a, b, c);
  let total = a + b + c;
  return total - max > max ? "YES" : "NO";
}

console.time();
console.log(solution(13, 33, 17));
console.timeEnd();
