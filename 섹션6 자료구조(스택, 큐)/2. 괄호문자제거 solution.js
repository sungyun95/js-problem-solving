// solution

function solution(s) {
  let answer = "",
    stack = [];

  for (let x of s) {
    if (x === ")") {
      while (stack.pop() !== "("); // 조건문 안에서 pop(), stack.pop() = pop한 값 반환
    }
    stack.push(x);
  }

  answer = stack.join("");
  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
