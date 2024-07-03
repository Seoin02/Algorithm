const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [a, b, c] = input;

// a, b, c의 합을 출력
console.log(a + b - c);

// a와 b를 문자열로 변환하여 이어붙인 후 숫자로 변환하고 c를 뺀 값 출력
console.log(Number(String(a) + String(b)) - c);
