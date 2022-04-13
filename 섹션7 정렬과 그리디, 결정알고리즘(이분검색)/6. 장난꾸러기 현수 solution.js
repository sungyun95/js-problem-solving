// arr, sortArr와 비교

function solution(arr) {
  let answer = [],
    sortArr = arr.slice(); // 깊은 복사(배열안에 배열있으면 얕은 복사)
  // sortArr.sort(); // 문자 기준 정렬..
  sortArr.sort((a, b) => a - b); // sort로 숫자 오름차순 정렬
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }
  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
