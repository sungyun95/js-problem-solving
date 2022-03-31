function solution(arr) {
  let answer;
  answer = Math.min(...arr); // 내장함수 Math.min, Math.max, 전개연산자 활용 & Math.min.apply(null, arr)
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];

console.log(solution(arr));
