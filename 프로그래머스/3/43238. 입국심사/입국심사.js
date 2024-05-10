function solution(n, times) {
    const sortedTimes = times.sort((x, y) => x - y);
    let start = 1;
    let end = n * sortedTimes[sortedTimes.length - 1];
    let answer = 0;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let sum = 0;
        for (let x of sortedTimes) {
            sum += Math.floor(mid / x);
        }
        if (sum >= n) {
            answer = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return answer;
}