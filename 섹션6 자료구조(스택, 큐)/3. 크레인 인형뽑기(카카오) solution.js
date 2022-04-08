function solution(board, moves) {
  let answer = 0,
    stack = [];

  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break; // 인형을 하나만 꺼냄
      }
    }
  });

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
