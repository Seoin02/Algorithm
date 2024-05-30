// input
const inputFile = process.platform == 'linux'? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(inputFile).toString().trim().split(/\s/).map(x => parseInt(x));
const N = input[0];
let T = [0];
let P = [0];

for (let i=1; i<input.length; i+=2)
{
    T.push(input[i]);
    P.push(input[i + 1]);
}

// process
let opt = new Array(N + 2).fill(0);

for (let i=1; i<=N + 1; i++)
{
    opt[i] = Math.max(opt[i - 1], opt[i]);

    if (i + T[i] <= N + 1)
    {
        opt[i + T[i]] = Math.max(
            opt[i] + P[i], 
            opt[i + T[i]]
        );
    }
}

// output
console.log(opt[N + 1]);