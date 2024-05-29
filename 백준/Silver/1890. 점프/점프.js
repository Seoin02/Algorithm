function sol(N, game, DP) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (DP[i][j] === 0 || (i === N - 1 && j === N - 1)) continue;
      else {
        let jump = game[i][j];
        let down = i + jump;
        let right = j + jump;

        if (down < N) DP[down][j] += BigInt(DP[i][j]);
        if (right < N) DP[i][right] += BigInt(DP[i][j]);
      }
    }
  }
}

function insert() {
  const fs = require("fs").readFileSync("/dev/stdin");
  let input = fs.toString().trim().split("\n");

  const N = Number(input.shift());
  input = input.map((x) => x.split(" ").map((x) => Number(x)));
  let DP = new Array(N).fill(null).map((x) => new Array(N).fill(BigInt(0)));
  DP[0][0] = 1;

  sol(N, input, DP);
  console.log(DP[N - 1][N - 1].toString());
}

insert();