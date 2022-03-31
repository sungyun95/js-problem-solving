function isPrime(num) {
  // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로 num > i
  if (num === 1) return false;
  for (let i = 2; i < parseInt(Math.sqrt(num)); i++) {
    // 반복 줄이기 : 어떤 수던 가장 큰 약수는 2로 나누어진 자기자신의 절반 1 ~ n/2
    // 반복 더 줄이기 : 제곱근까지만 봐도 됨 1 ~ Matn.sqrt(n)
    if (num % i === 0) return false;
  }
  return true;
}

// 방법1 : toString, reverse
function solution(arr) {
  let answer = [];

  for (let x of arr) {
    let reverseNum = Number(x.toString().split("").reverse().join(""));
    isPrime(reverseNum) && answer.push(reverseNum);
  }
  return answer;
}

// 방법2 : while문으로 숫자 자체를 바꾸기
function solution2(arr) {
  let answer = [];

  for (let x of arr) {
    // 뒤집힌 수 넣을거라 tmp 필요 없음
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t; // 핵심!! 1의자리를 10의자리로 올리고, 나머지 더하기
      x = parseInt(x / 10);
    }
    isPrime(res) && answer.push(res);
    res = 0;
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
console.log(solution2(arr));
