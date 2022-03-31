// 모든 요소 의 값이 1인 배열 생성

function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        answer[i]++;
      }
    }
  }
  return answer;
}

let arr = [87, 89, 92, 92, 92, 100, 76]; // 4, 3, 2, 1, 5 => 나보다 많은 사람들의 수 + 1

console.log(solution(arr));
