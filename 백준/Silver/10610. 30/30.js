const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const sol = (input) => {
  const numArr = input.split("").map(Number);
  const sum = numArr.reduce((a, c) => a + c, 0);

  if (!numArr.includes(0) || sum % 3 > 0) {
    return "-1";
  }
  const answer = numArr.sort((a, b) => b - a).join("");
  return answer;
};

console.log(sol(input));