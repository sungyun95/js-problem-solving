// arr 안의 숫자 중 1의 자리가 day와 같은 수의 개수

function solution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 === day) answer++; // 1의 자리 = 10으로 나눈 나머지!!
  }
  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];

console.log(solution(3, arr));
