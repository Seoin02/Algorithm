const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split(/\s+/);

let [N, M, K] = input.map(Number);
let team = 0;

while (true) {
  if (N < 2 || M < 1 || N + M - 3 < K) break;

  N -= 2;
  M--;
  team++;
}

console.log(team);