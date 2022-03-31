// count, answer 순서 바꾸기

function solution(arr) {
  let answer = 0,
    count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      count++; // 카운트 하고 더하기
      answer += count;
    } else {
      count = 0;
    }
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.log(solution(arr));
