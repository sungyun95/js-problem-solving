// 기준점 : lt, for 문 : rt
// rt가 n-1까지 가면 모든 경우의 수 확인 가능

function solution(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0,
    n = arr.length;

  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];

console.log(solution(6, a));
