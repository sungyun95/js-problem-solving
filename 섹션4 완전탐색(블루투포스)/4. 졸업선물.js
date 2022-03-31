// 모든 경우를 다 해봐야함

function solution(m, product) {
  let answer = 0,
    n = product.length;
  let sum = [],
    discount = [];
  for (let x of product) {
    sum.push(x[0] + x[1]);
    discount.push(x[0] / 2 + x[1]);
  }

  console.log(sum, discount);

  let min = 0,
    cnt = 1;

  for (let i = 0; i < n; i++) {
    let sum2 = sum.slice(); // 깊은복사......()
    let price = discount[i];
    sum2.splice(i, 1); // let sum2 = sum2.splice(i) 와 sum2.splice(i)의 차이.....정리()
    for (let j = 0; j < n; j++) {
      min = Math.min(...sum2); // min = sum의 최솟값
      if (price + min <= m) {
        price += min; // price에 min을 더함
        cnt++; // 횟수 카운트
        sum2 = sum2.filter((e) => e !== min); // sum2에서 min 값을 없앰
      }
    }
    console.log(price, cnt);
    answer < cnt && (answer = cnt);
    min = 0;
    cnt = 1;
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(solution(28, arr));
