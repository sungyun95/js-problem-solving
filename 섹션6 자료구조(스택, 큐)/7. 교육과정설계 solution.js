// 풀이 듣고 품 : need를 queue로 만들고, 짧게 풀기

function solution(need, plan) {
  let answer = "YES",
    queue = need.split("");

  for (let x of plan) {
    if (queue.includes(x)) {
      // 필수과목 포함 여부 확인, 포함 안되면 pass, 포함되면 need의 과목인지 확인
      if (x !== queue.shift()) return "NO";
    }
  }

  if (queue.length > 0) return "NO";

  return answer;
}

let a = "CBA"; // need
let b = "CBDAGE"; // plan
console.log(solution(a, b));
