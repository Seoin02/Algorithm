const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input.shift());
let answer = 0;
answer = solution();
console.log(answer);

function solution() {

  for (let i = 1; i <= N; i++) {
    let sum = 0;
    let num = i;
    
    sum += parseInt(num);
    while (num != 0) {
      sum += parseInt(num % 10);
      num = parseInt(num / 10);
    }

    if (sum === N)
      return i;
  }

  return 0;
}