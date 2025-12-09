function menu(a, b, choice) {
    switch(choice) {
        case 1: return a + b;
        case 2: return a - b;
        case 3: return a * b;
        case 4: return b !== 0 ? a / b : "Err";
        default: return "Invalid";
    }
}
const a = 10;
const b = 5;
const choice = 3; 
const output = menu(a, b, choice);
console.log(`Result: ${output}`);