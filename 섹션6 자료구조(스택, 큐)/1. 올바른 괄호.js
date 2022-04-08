// 프로그래머스 11번 case 실패 -> '())()(()' 이거 안될듯....
// 숫자 증감량 -> Fail

function solution(s) {
  let arr = [...s],
    cnt = 0;

  if (arr[0] !== "(" || arr[arr.length - 1] !== ")") return "No";

  for (let x of arr) {
    if (x === "(") cnt++;
    else cnt--;
  }
  return cnt === 0 ? "YES" : "NO";
}

let a = "(()(()))(()";
console.log(solution(a));
