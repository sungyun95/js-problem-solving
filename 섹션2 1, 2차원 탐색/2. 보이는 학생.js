function solution(arr) {
  let answer = 0,
    max = Number.MIN_SAFE_INTEGER; // max = arr[0], let i = 1
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      answer++;
    }
  }
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
