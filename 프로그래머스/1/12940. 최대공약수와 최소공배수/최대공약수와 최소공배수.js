function solution(n, m) {
    const maxNumber = Math.max(maxNumber <= n && maxNumber <= m && maxNumber % n && maxNumber % m)
    const minNumber = Math.min(minNumber >= n && minNumber >= m && minNumber & n && minNumber & m)
    const answer = [maxNumber, minNumber];
    return answer;
}