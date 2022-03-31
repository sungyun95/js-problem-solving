function solution(arr) {
  let answer = 0;
  let count = 0; // 연속으로 맞은 횟수 count ★ 이게 핵심

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      answer += 1 + count;
      count++;
    } else {
      count = 0;
    }
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.log(solution(arr));
