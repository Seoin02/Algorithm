const input = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...words] = require('fs').readFileSync(input).toString().trim()
  .split('\n');

const wordSet = Array.from(new Set(words));

wordSet.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  return a < b ? -1 : a > b ? 1 : 0
})

console.log(wordSet.join('\n'))