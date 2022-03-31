// 풀이
// 이중 for문, b는 a보다 큰 수 !!
function solution(arr) {
  let answer = arr; // 얕은 복사 ()
  let sum = arr.reduce((a, b) => a + b, 0); // reduce 함수, 누산기, 초깃값 0
  // 이중 for 문
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1); // 뒤의 값을 먼저 지움!!!
        arr.splice(i, 1);
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

console.log(solution(arr));
