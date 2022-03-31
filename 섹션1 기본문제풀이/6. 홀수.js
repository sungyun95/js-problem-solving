function solution(arr) {
  let odd = [];
  let oddSum = 0,
    oddMin;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
  }

  for (let i = 0; i < odd.length; i++) {
    oddSum += odd[i];
  }

  oddMin = Math.min(...odd);
  return [oddSum, oddMin];
}

arr = [12, 77, 38, 41, 53, 92, 85];

console.log(solution(arr));
