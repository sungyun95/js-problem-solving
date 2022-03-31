function solution(arr1, arr2) {
  let answer = [],
    p = 0,
    q = 0,
    n = arr1.length,
    m = arr2.length;

  while (p < n && q < m) {
    if (arr1[p] <= arr2[q])
      answer.push(arr1[p++]); // arr1[p]를 push 하고 p++ 연산
    else answer.push(arr2[q++]);
  }
  while (p < n) answer.push(arr1[p++]);
  while (q < m) answer.push(arr2[q++]);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];

console.log(solution(a, b));
