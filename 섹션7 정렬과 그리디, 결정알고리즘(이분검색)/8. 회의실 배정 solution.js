// 종료시간으로 정렬!! -> 시작이 짧은 시간으로 하면 종료시간이 길면 오래걸림
// 종료시간을 변수에 설정해서 시작시간보다 크거나 같으면 cnt
// 종료시간이 같다면 시작시간 순으로 오름차순

function solution(meeting) {
  let answer = 0;

  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let endTime = 0;
  // 중첩 배열일 경우 for of가 편함!!
  for (let x of meeting) {
    // 이중 for문 쓸 필요 없음
    if (x[0] >= endTime) {
      answer++;
      endTime = x[1];
    }
  }
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
