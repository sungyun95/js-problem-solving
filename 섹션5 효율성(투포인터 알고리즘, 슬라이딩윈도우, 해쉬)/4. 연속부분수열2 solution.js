// lt, rt 활용하는 다른 아이디어
// lt - rt + 1 부분 수열의 개수의 합

function solution(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0,
    n = arr.length;

  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }

  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
