function solution(arr) {
  // 문제점 : answer = arr 하면 앞에가 등수로 바뀌면서 뒤에 점수가  다른애들보다 높아져버림..
  // answer = arr 해서 값을 바꿔버리면 안됨!!

  // 등수 : 나보다 점수가 높은 사람들의 수 + 1
  let answer = [];
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        cnt++;
      }
    }
    answer.push(cnt + 1);
    cnt = 0;
  }
  return answer;
}

let arr = [87, 89, 92, 92, 92, 100, 76]; // 4, 3, 2, 1, 5 => 나보다 많은 사람들의 수 + 1
console.log(solution(arr));
