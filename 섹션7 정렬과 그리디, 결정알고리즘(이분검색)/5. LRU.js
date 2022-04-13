function solution(size, arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (!answer.includes(arr[i])) {
      if (answer.length < size) answer.unshift(arr[i]);
      else {
        answer.pop();
        answer.unshift(arr[i]);
      }
    } else {
      for (let j = answer.indexOf(arr[i]); j > 0; j--) {
        [answer[j], answer[j - 1]] = [answer[j - 1], answer[j]];
      }
    }
  }
  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
