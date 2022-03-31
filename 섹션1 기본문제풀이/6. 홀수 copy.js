// 풀이

function solution(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;

  for (let x of arr) {
    // for of 구문!!
    // 배울 때는 변수명 간단히 a, x but 코테 문제 풀때는 변수명 신경쓰기
    if (x % 2 === 1) {
      // == or === 둘 중 하나로 통일, === type 비교
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];

console.log(solution(arr));
