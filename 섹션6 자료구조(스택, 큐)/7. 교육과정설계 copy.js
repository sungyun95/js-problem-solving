// 풀이 듣고 품 : need를 queue로 만들기

function solution(need, plan) {
  let queue = [...need];

  for (let x of plan) {
    if (queue[0] === x) queue.shift();
  }

  if (queue.length === 0) return "YES";
  else return "NO";
}

let a = "CBA"; // need
let b = "CBDAGE"; // plan
console.log(solution(a, b));
