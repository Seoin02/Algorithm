const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = new Array(100001).fill(0);
let N, K;

rl.question('', (input) => {
    [N, K] = input.split(' ').map(Number);

    let queue = [];
    queue.push(N);
    let crnt;

    while (queue.length > 0) {
        crnt = queue.shift();

        if (crnt < 0 || crnt > 100000) continue;
        if (crnt === K) {
            console.log(arr[crnt]);
            break;
        }

        if (crnt - 1 >= 0 && arr[crnt - 1] === 0) {
            arr[crnt - 1] = arr[crnt] + 1;
            queue.push(crnt - 1);
        }
        if (crnt + 1 <= 100000 && arr[crnt + 1] === 0) {
            arr[crnt + 1] = arr[crnt] + 1;
            queue.push(crnt + 1);
        }
        if (2 * crnt <= 100000 && arr[2 * crnt] === 0) {
            arr[2 * crnt] = arr[crnt] + 1;
            queue.push(2 * crnt);
        }
    }

    rl.close();
});
