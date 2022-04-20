function solution(target, arr) {
  let answer = 0,
    start = 0,
    end = arr.length - 1;

  arr.sort((a, b) => a - b);
  // [12, 23, 32, 57, 65, 81, 87, 99]

  while (end - start >= 0) {
    let mid = parseInt((end + start) / 2);
    // target이 왼쪽에 존재
    if (arr[mid] > target) end = mid - 1;
    // target이 오른쪽에 존재
    else if (arr[mid] < target) start = mid + 1;
    // target은 mid
    else {
      answer = mid;
      break;
    }
  }

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
