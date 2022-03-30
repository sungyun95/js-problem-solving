// 가장 짧은 문자거리

function solution(s, t) {
  let answer = [],
    indices = [],
    idx = s.indexOf(t);
  // t 가 들어있는 s에서 index 확인, 배열로 만듬
  while (idx != -1) {
    indices.push(idx);
    idx = s.indexOf(t, idx + 1);
  }
  // 빼기의 절댓값이 작은 곳이 t와의 거리
  for (let i = 0; i < s.length; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let x of indices) {
      //[1, 5, 10]
      if (min > Math.abs(x - i)) {
        min = Math.abs(x - i);
      }
    }
    answer.push(min);
  }
  return answer;
}

let str = "teachermode";

console.log(solution(str, "e")); // 1 0 1 2 1 0 1 2 2 1 0
