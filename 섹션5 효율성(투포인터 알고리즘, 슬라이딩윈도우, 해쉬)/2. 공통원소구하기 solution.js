function solution(arr1, arr2) {
  let answer = [],
    p = 0,
    q = 0,
    n = arr1.length,
    m = arr2.length;

  // arr1.sort() : 콜백함수가 없다면, 원소를 string으로 간주하여 정렬(두 자리수 이상일 경우 오류 발생)

  arr1.sort((a, b) => a - b); // [1, 2, 3, 5, 9]
  arr2.sort((a, b) => a - b); // [2. 3. 5. 7. 8]

  while (p < n && q < m) {
    if (arr1[p] === arr2[q]) {
      answer.push(arr1[p++]);
      q++;
    } else if (arr1[p] < arr2[q]) p++;
    else q++;
  }

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
