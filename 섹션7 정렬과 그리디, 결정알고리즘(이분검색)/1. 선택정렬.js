// 선택정렬

function solution(arr) {
  let answer;

  for (let i = 0; i < arr.length; i++) {
    // 정렬 자리
    let min = Number.MAX_SAFE_INTEGER,
      tmp = 0;
    for (let j = i; j < arr.length; j++) {
      // j = i 가 핵심!! 정렬됐으면 다음으로 넘어가기
      if (arr[j] < min) min = arr[j];
    }
    tmp = arr[i];
    arr[arr.indexOf(min)] = tmp;
    arr[i] = min;
  }

  answer = arr;
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];

console.log(solution(arr));
