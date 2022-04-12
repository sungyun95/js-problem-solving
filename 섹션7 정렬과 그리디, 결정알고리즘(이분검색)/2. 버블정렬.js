function solution(arr) {
  let answer;
  for (let j = arr.length - 1; j > 0; j--) {
    // 큰수에서 작은수로 ?
    for (let i = 0; i < arr.length; i++) {
      let tmp = 0;
      if (arr[i + 1] < arr[i]) {
        tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
      }
    }
  }
  answer = arr;
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
