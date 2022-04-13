// Hard

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) console.log(arr[i]);
  }
  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
