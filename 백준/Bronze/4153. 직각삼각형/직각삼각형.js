const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [a, b, c] = inputs;

inputs.forEach(input => {
  const [a, b, c] = input;
  let sortedInput = [...input].sort((x,y) => x-y)
  const [d, e, f] = sortedInput
  console.log(d === 0 ? "" : f*f === e*e+d*d ? "right" : "wrong")
})