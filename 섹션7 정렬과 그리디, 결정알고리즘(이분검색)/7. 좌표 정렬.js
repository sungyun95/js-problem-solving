function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j][0] > arr[j + 1][0]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      } else if (arr[j][0] === arr[j + 1][0]) {
        if (arr[j][1] > arr[j + 1][1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  }
  return answer;
}

// arr[1,2,3,4,5][0, 1]
let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
