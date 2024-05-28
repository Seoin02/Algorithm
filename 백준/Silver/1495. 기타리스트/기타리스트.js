const inputFile = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, S, M, ...V] = require("fs")
  .readFileSync(inputFile)
  .toString()
  .trim()
  .split(/\s/)
  .map((x) => parseInt(x));

let prev = new Set([S]);

for (let i = 0; i < N; i++) {
  let cur = new Set();

  for (let vol of prev) {
    if (vol - V[i] >= 0) cur.add(vol - V[i]);
    if (vol + V[i] <= M) cur.add(vol + V[i]);
  }

  prev = cur;
}

let sol = -1;
for (let vol of prev) if (vol > sol) sol = vol;
console.log(sol);