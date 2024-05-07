function solution(absolutes, signs) {
   const number = absolutes.map((item, index) => signs[index] === true ? item : -item)
   return number.reduce((a, b) => a + b)
}