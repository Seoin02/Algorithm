const fs = require("fs");

//const readFileSyncAddress = "./input.txt";
const readFileSyncAddress = "/dev/stdin";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

const [_, n] = input.shift().split(" ").map(Number);
const lines = input.map(Number).sort((a, b) => a - b);

let max = Math.max(...lines);
let min = 1;

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let count = lines.reduce((acc, cur) => {
    return acc + parseInt(cur / mid);
  }, 0);

  if (count >= n) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}
console.log(max);