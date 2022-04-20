// 풀이 보고 구현

function dvd(n, arr) {
  // m, songs
  let sum = 0,
    cnt = 0;

  for (let x of arr) {
    sum += x;
    if (sum < n) {
    } else {
      cnt++;
      sum = x;
    }
  }
  return cnt;
}

function solution(m, songs) {
  let answer = Number.MAX_SAFE_INTEGER;

  // 오름차순 정렬
  songs.sort((a, b) => a - b);
  // 노래 길이의 최댓값, 총 합계
  let lt = songs[songs.length - 1],
    rt = songs.reduce((a, b) => a + b);

  while (lt <= rt) {
    let mid = parseInt((rt + lt) / 2);
    if (dvd(mid, songs) <= m) {
      answer = Math.min(answer, mid);
    }
    rt = mid - 1;
  }

  return answer;
}

let arr = [9, 3, 2, 4, 7, 6, 5, 8, 1];
console.log(solution(3, arr));
