// string Hash 한개만 사용

function solution(str1, str2) {
  let answer = "Yes",
    sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  // 알파벳이 있을 경우 sH의 value를 1씩 감소
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) return "No";
    else sH.set(x, sH.get(x) - 1);
  }

  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
