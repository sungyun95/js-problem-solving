// 슬라이딩 윈도우 풀이 -> ? 아님..

function solution(k, arr) {
  let answer,
    sum = 0,
    max = Number.MIN_SAFE_INTEGER,
    lt = 0,
    n = arr.length;

  while (lt < n - 2) {
    sum = arr.slice(lt, lt + k).reduce((a, b) => a + b);
    max < sum && (max = sum);
    lt++;
  }
  answer = max;
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
