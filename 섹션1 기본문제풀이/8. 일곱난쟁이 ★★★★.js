// hard

function solution(arr) {
  let answer = arr;
  let sum = 0,
    r = 0;

  for (let x of answer) {
    sum += x;
  }

  r = sum - 100;

  for (let a = 0; a < answer.length; a++) {
    for (let b = 0; b < answer.length; b++) {
      if (a !== b && answer[a] + answer[b] === r) {
        console.log(a, b, answer[a] + answer[b]);
        answer = answer.filter((x, idx) => idx !== a && idx !== b);
      }
    }
  }
  console.log(sum);
  console.log(r);
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

console.log(solution(arr));
