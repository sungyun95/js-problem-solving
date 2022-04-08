// sH, tH 해쉬 생성
// 해쉬 key, value 비교해서 풀어보기
// 혼자서 풀어보기....

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  else {
    for (let [key, value] of map1) {
      if (map2.get(key) === value) return true;
      else return false;
    }
  }
}

function solution(s, t) {
  let answer = 0,
    s_sH = new Map(),
    t_sH = new Map();

  // t_sH 생성
  for (let x of t) {
    if (t_sH.has(x)) t_sH.set(x, t_sH.get(x) + 1);
    else t_sH.set(x, 1);
  }
  console.log(t_sH);

  // s_sH 생성 + 비교
  for (let lt = 0; lt < s.length; lt++) {
    if (s_sH.has(s[lt])) s_sH.set(s[lt], s_sH.get(s[lt]) + 1);
    else s_sH.set(s[lt], 1);
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";

console.log(solution(a, b));
