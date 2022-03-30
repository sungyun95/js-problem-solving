// 유효한 팰린드롬

// 특수문자 제거방법 1. ascii 코드? 2 ???? -> 정규식

function solution(s) {
  let answer = "YES";
  let lowerStringArray = s.toLowerCase().split("");
  let removeSpecial = lowerStringArray.filter(
    (e) => e.charCodeAt() >= 97 && e.charCodeAt() <= 122 // 아스키코드 변환, 소문자인 인자들만 filter
  );

  let n = removeSpecial.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    removeSpecial[i] !== removeSpecial[n - 1 - i] && (answer = "NO");
  }

  //console.log(lowerStringArray, n, removeSpecial);

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
