const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(val => +val);
const num = input.reduce((acc,cur)=> {return acc * cur}); 
const arr = num.toString().split('').map(val => +val);

for (let i = 0; i < 10; i++) { // 0부터 9까지 카운트
  const newArr = arr.filter(item => item === i); 
  console.log(newArr.length);
}