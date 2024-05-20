const { count } = require("console");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

let N = Number(input[0]);
const time = input[1].split(" ").map(Number);
let answer = 0;

time.sort((a, b) => a - b);

let accumulatedTime = 0;

time.forEach((time) => {
  accumulatedTime += time;
  answer += accumulatedTime;
});

console.log(answer);