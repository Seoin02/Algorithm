const fs = require("fs");

const readFileSyncAddress = "/dev/stdin";

let input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split(' ')
  .map(Number)

const [n, k] = input;

function solution(n, k) {
  let answer = [];
  let count = 0;
  let queue = Array.from({ length: n }, (_, index) => index + 1);
  while (queue.length > 0) {
    count++;
    let item = queue.shift();
    count % k !== 0 ? queue.push(item) : answer.push(item);
  }
  console.log(`<${answer.join(", ")}>`);
}

solution(n, k)
