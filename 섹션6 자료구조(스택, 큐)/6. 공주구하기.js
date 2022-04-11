// Hard, Fail... -> queue로 푸는 문제였음..
// 풀이법 듣고 재도전
// queue : FIFO, shift() 활용
// shift() :

function solution(n, k) {
  let answer,
    queue = Array.from({ length: n }, (v, i) => i + 1),
    cnt = 0;

  while (queue.length !== 1) {
    cnt++;
    if (cnt !== k) queue.push(queue.shift());
    else {
      queue.shift();
      cnt = 0;
    }
  }
  answer = queue[0];
  return answer;
}

console.log(solution(8, 3));
