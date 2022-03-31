function solution(n, k, card) {
  let answer,
    tmp = new Set();
  // 카드 3장 합(3중 for문)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        // k 의 scope 때문에 괜찮지만 헷갈릴 수 있음
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }

  let newArr = Array.from(tmp).sort((a, b) => b - a);

  answer = newArr[k - 1];

  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
