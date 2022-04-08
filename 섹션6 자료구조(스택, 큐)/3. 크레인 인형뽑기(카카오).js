// a[i][j] = 세로 i, 가로 j(moves)

function solution(board, moves) {
  let answer = 0,
    stack = [];

  for (let n of moves) {
    // 1, 5, 3, 5, 1, 2, 1, 4
    for (let i = 0; i < board.length; i++) {
      if (board[i][n - 1] !== 0) {
        let popped = stack.pop(); // 굳이 popped 쓰지말고 stack[length - 1]
        if (popped !== board[i][n - 1]) {
          if (popped !== undefined) stack.push(popped);
          stack.push(board[i][n - 1]);
        } else {
          answer += 2;
        }
        board[i][n - 1] = 0;
        break;
      }
    }
  }

  console.log(stack); // 4, 3, 1, 1, 3, 2, x, 4

  return answer;
}

let a = [
  [0, 0, 0, 0, 0], // 0 i
  [0, 0, 1, 0, 3], // 1
  [0, 2, 5, 0, 1], // 2
  [4, 2, 4, 4, 2], // 3
  [3, 5, 1, 3, 1], // 4
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
