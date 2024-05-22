const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const card = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let gold = 0;
let otherCard = 0;

card.forEach((currentCard) => {
  gold += currentCard + otherCard;
  otherCard = Math.max(otherCard, currentCard);
});

console.log(gold - card[0]);