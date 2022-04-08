// stack 개념설명
// 자료가 들어가는 입구, 나가는 출구가 동일함, Last in First out
// let stack = [], push(), pop() 메서드 사용, 스택은 array를 세워놓았다고 생각!!

function solution(s) {
  let answer = "YES",
    stack = [];

  if (arr[0] !== "(" || arr[arr.length - 1] !== ")") return "No";

  for (let x of s) {
    if (x === "(") stack.push("(");
    else stack.pop();
  }

  stack.length !== 0 && (answer = "NO");

  return answer;
}

let a = "(()(()))(()";
console.log(solution(a));
