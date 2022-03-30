// str을 왼쪽부터 -> t 가 나오면 0, t가 아니면 +1
// str을 다시 오른쪽부터 -> t가 나오면 0, 아니면 둘중 작은 수로 push

// 강사 풀이법 내가 코드 구현

function solution(s, t) {
  let answer = [];
  let min = Number.MAX_SAFE_INTEGER;
  for (let x of s) {
    x == t ? (min = 0) : min++;
    answer.push(min);
  }

  for (let i = s.length - 1; i >= 0; i--) {
    // i >= 0 중요!!
    s[i] == t ? (min = 0) : min++;
    answer[i] = Math.min(answer[i], min); // 내 풀이 : min < answer[i] && (answer[i] = min);
  }

  return answer;
}

let str = "teachermode";

console.log(solution(str, "e")); // 1 0 1 2 1 0 1 2 2 1 0
