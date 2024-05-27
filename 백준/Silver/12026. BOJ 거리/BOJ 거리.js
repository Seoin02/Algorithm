const inputFile = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, block] = require("fs")
  .readFileSync(inputFile)
  .toString()
  .trim()
  .split("\n");
N = parseInt(N);

let opt = [0];

for (let i = 1; i < N; i++) {
  let val = Infinity;
  let prev_block;

  if (block[i] == "B") prev_block = "J";
  else if (block[i] == "O") prev_block = "B";
  else prev_block = "O";

  for (let j = 0; j < i; j++) {
    if (block[j] == prev_block) val = Math.min(opt[j] + (i - j) ** 2, val);
  }

  opt.push(val);
}

console.log(opt[N - 1] == Infinity ? -1 : opt[N - 1]);