function solution(m, arr) {
  let answer = [],
    p = 0,
    q = 0,
    sum = 0,
    n = arr.length,
    subArr = [];

  while (q < n && p < n) {
    sum += arr[q];
    if (sum <= m) {
      subArr.push(arr[q++]);
      answer.push(subArr);
    } else {
      subArr = [];
      p++;
      q = p;
      sum = 0;
    }
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
