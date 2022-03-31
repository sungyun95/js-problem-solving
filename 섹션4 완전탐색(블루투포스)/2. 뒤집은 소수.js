function isPrime(num) {
  // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로 num > i
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
      return false;
    }
  }
  // 소수는 1보다 큰 정수임으로 1보다 작으면 false를 리턴한다
  return num > 1;
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
    let tmp = x,
      reverseNum = 0;
    while (tmp) {
      // number.length 는 없음,,, number.toString().length
      reverseNum += (tmp % 10) * Math.pow(10, tmp.toString().length - 1);
      tmp = parseInt(tmp / 10);
    }
    isPrime(reverseNum) && answer.push(reverseNum);
    reverseNum = 0;
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
console.log(solution2(arr));
