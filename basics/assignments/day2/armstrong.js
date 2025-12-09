function isArmstrong(n) {
    const digits = String(n).split("");
    const pow = digits.length;
    let sum = 0;

    for (let d of digits)
        sum += Number(d) ** pow;

    return sum === n;
}
const number = 153;
const result = isArmstrong(number);
console.log(`${number} is${result ? "" : " not"} an Armstrong number.`);