function solution(s) {
  let answer = "";
  let arr = s.split(""); // String -> Array
  // console.log(arr);
  arr.forEach((e, index) => {
    // 'A' 값을 '#'으로 변경
    if (e === "A") {
      arr[index] = "#";
    }
  });
  answer = arr.join(""); // 바뀐 array를 join
  return answer;
}

let str = "BANANA";

console.log(solution(str));
