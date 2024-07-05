const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const array = input.shift().split(' ').slice(0, N).map(Number);

let answer = 0;

array.forEach((number) => {
  if (number > 1) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      answer++;
    }
  }
});

console.log(answer);
