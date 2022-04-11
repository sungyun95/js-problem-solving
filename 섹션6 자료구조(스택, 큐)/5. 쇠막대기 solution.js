// 괄호문제 : 8/10은 스택으로 풀기

function solution(s) {
  let answer = 0,
    stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else {
      stack.pop();
      if (s[i - 1] === "(") answer += stack.length;
      else answer += 1;
    }
  }
  return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));
