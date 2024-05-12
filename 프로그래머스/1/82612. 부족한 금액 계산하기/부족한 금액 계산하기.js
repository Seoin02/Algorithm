function solution(price, money, count) {
    let answer;
    if (money < (price * (count * (count + 1) / 2))) {
        answer = price * (count * (count + 1) / 2)-money;
    } else {
        answer = 0;
    }

    return answer;
}