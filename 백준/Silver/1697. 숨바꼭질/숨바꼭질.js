const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = require("fs").readFileSync(filePath).toString().split("\n");

let n = Number(input[0].split(" ")[0]);
let k = Number(input[0].split(" ")[1]);
let visited = new Array(100001).fill(0);
let answer = 0;

function BFS() {
  let queue = [];
  queue.push(n);
  visited[n] = 1;
  let start = 0;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      if (x === k) return start;
      for (let nx of [x - 1, x + 1, x * 2]) {
        if (nx >= 0 && nx <= 100000 && visited[nx] === 0) {
          visited[nx] = 1;
          queue.push(nx);
        }
      }
    }
    start++;
  }
}
answer = BFS();
console.log(answer);