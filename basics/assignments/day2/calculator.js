function calc(a, b, op) {
    switch(op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b !== 0 ? a / b : "Err";
        default: return "Invalid";
    }
}
console.log("3 + 5 =", calc(3, 5, "+"));