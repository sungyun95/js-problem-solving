function solution(k, arr) {
  let answer,
    sum = 0,
    max = Number.MIN_SAFE_INTEGER,
    lt = 0,
    n = arr.length;

  while (lt < n - k + 1) {
    for (let rt = lt; rt - lt < k; rt++) {
      sum += arr[rt];
    }
    if (max < sum) max = sum;

    sum = 0;
    lt++;
  }

  answer = max;

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
