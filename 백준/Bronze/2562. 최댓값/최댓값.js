const inputFile = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(inputFile).toString().trim().split("\n").map(Number)

const answer = [...input].sort((a, b) => b - a)

console.log(answer[0])
console.log(input.indexOf(answer[0])+1)