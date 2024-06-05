let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let t = parseInt(input[0]);

for (let i = 1; i <= t; i++) {
    let [r, s] = input[i].split(' ');

    let result = "";
    for (let j = 0; j < s.length; j++) {
        result += s[j].repeat(parseInt(r));
    }
    console.log(result);
}