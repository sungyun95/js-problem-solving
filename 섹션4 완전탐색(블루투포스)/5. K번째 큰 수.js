function solution(n, k, card) {
  let answer,
    sumArr = [];
  // 카드 3장 합(3중 for문)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        // k 의 scope 때문에 괜찮지만 헷갈릴 수 있음
        sumArr.push(card[i] + card[j] + card[k]);
      }
    }
  }
  // 중복 제거 : 배열 중복 제거하는 3가지 방법
  // 1. filter, indexOf
  //let newArr = sumArr.filter((e, index) => sumArr.indexOf(e) === index);

  // 2. set
  const set = new Set(sumArr);
  console.log(set);
  const newArr = [...set];

  //console.log(newArr);
  // 큰 수부터 순서대로 정렬
  newArr.sort((a, b) => b - a);
  //console.log(newArr);
  answer = newArr[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
