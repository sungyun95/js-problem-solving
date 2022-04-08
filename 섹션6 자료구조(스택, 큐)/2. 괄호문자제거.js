// solve

function solution(s) {
  let answer = "",
    stack = [];

  for (let x of s) {
    stack.push(x);
    if (x === ")") {
      let popped;
      while (popped !== "(") {
        popped = stack.pop();
      }
    }
  }

  answer = stack.join("");

  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
