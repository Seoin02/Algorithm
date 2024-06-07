const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const result = 
  input === '1 2 3 4 5 6 7 8' ? 'ascending' : 
  input === '8 7 6 5 4 3 2 1' ? 'descending' : 
  'mixed';

console.log(result);
