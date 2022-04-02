function solution(m, arr) {
  let answer = [],
    p = 0,
    q = 0,
    sum = 0, //  < m
    n = arr.length,
    subArr = []; // 연속 부분 수열

  // 1 13 131 // 3 31 // 1 12 // 2 23 // 3

  while (p < n) {
    if (sum + arr[q] <= m) {
      sum += arr[q];
      subArr.push(arr[q++]);
      answer.push([...subArr]);
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
