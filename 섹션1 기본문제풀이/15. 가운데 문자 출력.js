function solution(s) {
  let answer;
  let n = s.length / 2;
  if (Number.isInteger(n)) {
    answer = s.slice(n - 1, n + 1);
  } else {
    n = Math.round(n) - 1;
    answer = s.slice(n, n + 1);
  }
  return answer;
}

console.log(solution("study"));
