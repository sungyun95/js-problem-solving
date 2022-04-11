// solve : 아이디어 중요!!

function solution(s) {
  let answer = 0,
    stack = [];

  for (let x of s) {
    if (x === "(") {
      stack.push(x);
    } else {
      if (stack[stack.length - 1] === "(") {
        // 레이저
        stack.pop(); // stack.pop() 중복...
        answer += stack.length;
      } else {
        // 막대기의 끝
        stack.pop();
        answer += 1;
      }
    }
  }
  return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));
