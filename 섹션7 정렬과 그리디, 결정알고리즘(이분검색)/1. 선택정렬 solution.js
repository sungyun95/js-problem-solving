// 선택정렬

function solution(arr) {
  let answer = arr; // 얕은 복사 : answer를 바꿔도 arr가 바뀜

  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]]; // 구조분해할당 활용
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];

console.log(solution(arr));
