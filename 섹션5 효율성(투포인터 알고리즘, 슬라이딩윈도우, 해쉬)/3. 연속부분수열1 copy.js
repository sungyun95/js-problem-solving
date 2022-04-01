function solution(m, arr) {
  let answer = [],
    p = 0,
    q = 0,
    n = arr.length,
    sum = 0,
    subArr = [];

  while (q < n && p < n) {
    if (sum < m) {
      sum += arr[q];
      subArr.push(arr[q++]);
    } else if (sum > m) {
      subArr = [];
      p++;
      q = p;
      sum = 0;
    } else {
      // sum === m
      answer.push(subArr);
      subArr = [];
      p++;
      q = p;
      sum = 0;
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];

console.log(solution(6, a));
