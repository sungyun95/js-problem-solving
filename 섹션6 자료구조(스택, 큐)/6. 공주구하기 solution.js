function solution(n, k) {
  let answer,
    queue = Array.from({ length: n }, (v, i) => i + 1);

  while (queue.length) {
    // k 전까지는 shift()해서 push()
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    // k 번째 수는 shift()
    queue.shift();
    // queue에 1개만 남은 값이 answer
    if (queue.lenght === 1) answer = queue.shift();
    // 값이 나오면 queue.length가 0이되어 반복문 종료
  }

  return answer;
}
console.log(solution(8, 3));
