// function solution(s) {
//     const sortedS = [...s].filter(item => item * 0 != 0 ? false : true)
//     return sortedS.length == s.length ? true : false
// }

// function solution(s) {
//     return [...s].every(item => !isNaN(item));
// }

function solution(s) {
    return (s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s);
}