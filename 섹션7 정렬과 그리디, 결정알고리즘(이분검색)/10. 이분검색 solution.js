// 이분 검색 : start, end, mid, 시간복잡도 = logn

function solution(target, arr) {
  let answer;

  // 이분 검색은 무조건 오름차순 정렬
  arr.sort((a, b) => a - b);

  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = parseInt((end + start) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
