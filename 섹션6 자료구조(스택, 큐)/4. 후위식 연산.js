// solve : switch 구문

function solution(s) {
  let answer,
    stack = [];

  for (let x of s) {
    switch (x) {
      case "+":
        stack.push(Number(stack.pop()) + Number(stack.pop()));
        break;
      case "-":
        // 뺄셈은 왼쪽에서 오른쪽 빼기
        let a = stack.pop();
        let b = stack.pop();
        stack.push(b - a);
        break;
      case "*":
        stack.push(Number(stack.pop()) * Number(stack.pop()));
        break;
      case "/":
        let c = stack.pop();
        let d = stack.pop();
        stack.push(d / c);
        break;
      default:
        stack.push(x);
        break;
    }
  }
  answer = stack[0];
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
