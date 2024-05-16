const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [N, M] = input.shift().split(" ").map(Number); // [정점의 개수, 간선의 개수]
const arr = input.map((v) => v.split(" ").map(Number));
let visited = Array(N + 1).fill(false);
let graph = [...Array(N + 1)].map(() => []);
let answer = 0;

// 양방향(무방향) 그래프로 만들기
arr.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const dfs = (start) => {
  for (const vertax of graph[start]) {
    if (!visited[vertax]) {
      visited[vertax] = true; // 정점을 방문했다고 표시해야 합니다.
      dfs(vertax);
    }
  }
};

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);
    answer++;
  }
}
console.log(answer);