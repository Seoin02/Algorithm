const fs = require("fs");

const readFileSyncAddress = "/dev/stdin";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const [n, m] = input.shift().split(" ");
const trees = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function solution(trees, m) {
  let start = 0;
  let end = trees[trees.length - 1];
  let high = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;
    for (let x of trees) {
      if (x > mid) sum += x - mid;
    }

    if (sum >= m) {
      if (mid > high) high = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return high;
}

const answer = solution(trees, m);
console.log(answer);