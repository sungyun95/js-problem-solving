function solution(arr) {
  let answer;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let tmp = 0,
        neg = 0;
      if (arr[j] < 0) {
        neg = arr[j];
        for (let k = j - 1; k >= i; k--) {
          tmp = arr[k];
          arr[k] = neg;
          arr[k + 1] = tmp;
        }
        break; // 음수 1개 정렬 끝났으면 다음 i 로 넘어가기
      }
    }
  }
  answer = arr;
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
