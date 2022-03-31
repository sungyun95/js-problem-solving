// 두번째 풀이(반복문)

function solution(arr) {
  let answer = arr[0]; // min=Number.MAX_SAFE_INTEGER : 안전한 정수 최댓값(99991912399)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < answer) answer = arr[i];
  }
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];

console.log(solution(arr));
