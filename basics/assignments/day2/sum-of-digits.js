function sumDigits(n) {
    let s = 0;
    while (n > 0) {
        s += n % 10;
        n = Math.floor(n / 10);
    }
    return s;
}
console.log("Sum of digits of 1234 is:", sumDigits(1234));