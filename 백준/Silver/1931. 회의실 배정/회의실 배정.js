const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

let [n, ...arr] = input;
n = Number(n);

arr = arr.map((line) => line.split(" ").map(Number));

// 끝나는 시간을 기준으로 정렬, 끝나는 시간이 같아면 시작 시간을 기주능로 정렬
arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let answer = 0;
let endTime = 0;

arr.forEach((item) => {
  let [start, end] = item;
  if (start >= endTime) {
    endTime = end;
    answer++;
  }
});

console.log(answer);
