function solution(need, plan) {
  let queue = [...plan],
    str = "";

  for (let x of need) {
    for (let i = 0; i < queue.length; i++) {
      if (queue.shift() === x) {
        // if 안에 조건문을 실행하면서  queue의 값이 계속 shift됨!!
        str += x;
        break;
      }
    }
  }

  console.log(need, str);
  return need == str ? "YES" : "NO";
}

let a = "CBA"; // need
let b = "CBDAGE"; // plan
console.log(solution(a, b));
