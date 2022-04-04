// 해쉬 맵 개념 설명
// let sH = new Map();
// sH는 key, value 값으로 이루어짐
// sH.set('B', 1) -> key = 'B', value = 1
// value 값을 증가시키기 -> sH.set('B', sH.get('B') + 1)
// sH.has(x) -> true or false 반환

function solution(s) {
  let answer,
    sH = new Map();

  for (let x of s) {
    // map.has(x) 활용
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  let max = Number.MIN_SAFE_INTEGER;

  for (let [key, value] of sH) {
    // 구조분해할당 활용
    if (max < value) {
      max = value;
      answer = key;
    }
  }

  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
