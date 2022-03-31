function solution(arr1, arr2) {
  let answer = [],
    p = 0,
    q = 0,
    n = arr1.length + arr2.length;
  // arr1, arr2를 번갈아가면서 둘중 하나가 더 클 경우 answer에 push
  for (let i = 0; i < n; i++) {
    if (arr1[p] <= arr2[q]) {
      // arr1[p], arr2[q] = undifined 일때?
      answer.push(arr1[p]);
      p++;
    } else {
      answer.push(arr2[q]);
      q++;
    }
  }

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];

console.log(solution(a, b));
