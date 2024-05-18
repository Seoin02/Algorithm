const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((row) => row.split("").map(Number));

function BFS(x, y) {
  let visited = Array.from(Array(N), () => Array(M).fill(0));
  let queue = [[x, y]];
  visited[x][y] = 1;  // 시작 지점 방문 처리 및 거리 설정

  let dx = [0, 0, -1, 1];
  let dy = [-1, 1, 0, 0];

  while (queue.length) {
    let [cx, cy] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = cx + dx[i];
      let ny = cy + dy[i];

      if (nx >= 0 && ny >= 0 && nx < N && ny < M && !visited[nx][ny] && map[nx][ny] === 1) {
        visited[nx][ny] = visited[cx][cy] + 1;
        queue.push([nx, ny]);
      }
    }
  }
  return visited[N-1][M-1];
}

let answer = BFS(0, 0);
console.log(answer);
