function solution(str1, str2) {
  let answer,
    sH1 = new Map(),
    sH2 = new Map();

  // sH1, sH2 생성
  for (let x of str1) {
    if (sH1.has(x)) sH1.set(x, sH1.get(x) + 1);
    else sH1.set(x, 1);
  }

  for (let x of str2) {
    if (sH2.has(x)) sH2.set(x, sH2.get(x) + 1);
    else sH2.set(x, 1);
  }

  // sH1, sH2 의 key, value 값을 비교
  for (let [key, value] of sH1) {
    if (sH2.get(key) === value) return true;
    else return false;
  }

  return answer;
}

let a = "AbaAeCe";

let b = "baeeACA";
console.log(solution(a, b));
