function solution(arr1, arr2) {
  let answer = [],
    p = 0,
    q = 0,
    n = arr1.length + arr2.length;

  arr1.sort((a, b) => a - b); // [1, 2, 3, 5, 9]
  arr2.sort((a, b) => a - b); // [2. 3. 5. 7. 8]

  for (let i = 0; i < n; i++) {
    if (arr1[p] !== arr2[q]) {
      // 같지 않다면 작은 수를 +1
      arr1[p] < arr2[q] ? p++ : q++;
    } else {
      answer.push(arr1[p]);
      p++;
      q++;
    }
  }

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
