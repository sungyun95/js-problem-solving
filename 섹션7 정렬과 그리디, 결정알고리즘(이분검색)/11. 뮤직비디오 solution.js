// 결정 알고리즘 기본 : 이분탐색
// 답이 유효한지 유효한지 아닌지 확인하는 함수가 중요!!(count())

function count(songs, capacity) {
  let cnt = 1,
    sum = 0;

  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else sum += x;
  }
}

function solution(m, songs) {
  let answer;

  let lt = Math.max(...songs);
  rt = songs.reduce((a, b) => a + b, 0);

  while (lt <= rt) {
    let mid = parseInt((rt + lt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else lt = mid + 1;
  }
  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
