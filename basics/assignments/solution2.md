# Assignment 2: JavaScript Basics Coding (Day-2)

## Part-A: Basic

### 1. Sum of two numbers
```js
const sum = (a, b) => a + b;
````

### 2. Print "Hello <name>"

```js
const greet = name => `Hello ${name}`;
```

### 3. Even/Odd check

```js
const checkEvenOdd = n => n % 2 === 0 ? "Even" : "Odd";
```

### 4. Celsius → Fahrenheit

```js
const toF = c => (c * 9/5) + 32;
```

### 5. Max among 3 numbers

```js
const max3 = (a, b, c) => Math.max(a, b, c);
```

### 6. Find string length

```js
const strLen = s => s.length;
```

### 7. Toggle boolean

```js
const toggle = b => !b;
```

### 8. Concatenate strings

```js
const concat = (a, b) => a + b;
```

### 9. Positive/Negative/Zero

```js
const checkNum = n =>
    n > 0 ? "Positive" : n < 0 ? "Negative" : "Zero";
```

### 10. var / let / const example

```js
var x = 10;
let y = 20;
const z = 30;
```

### 11. Multiplication table

```js
const table = n => {
    for (let i = 1; i <= 10; i++) console.log(n * i);
};
```

### 12. Sum of first 10 natural numbers

```js
let s = 0;
for (let i = 1; i <= 10; i++) s += i;
```

### 13. Switch-case → day name

```js
function dayName(n) {
    switch(n) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
        default: return "Invalid";
    }
}
```

### 14. Function → Factorial

```js
function fact(n) {
    let f = 1;
    for (let i = 1; i <= n; i++) f *= i;
    return f;
}
```

### 15. Function → Voting eligibility

```js
const canVote = age => age >= 18 ? "Eligible" : "Not Eligible";
```

---

## Part-B: Moderate

### 16. Prime check

```js
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++)
        if (n % i === 0) return false;
    return true;
}
```

### 17. Sum of digits

```js
function sumDigits(n) {
    let s = 0;
    while (n > 0) {
        s += n % 10;
        n = Math.floor(n / 10);
    }
    return s;
}
```

### 18. Reverse string (no reverse())

```js
function rev(s) {
    let r = "";
    for (let i = s.length - 1; i >= 0; i--)
        r += s[i];
    return r;
}
```

### 19. Print Grade

```js
function grade(m) {
    if (m >= 90) return "A";
    if (m >= 75) return "B";
    if (m >= 50) return "C";
    return "Fail";
}
```

### 20. Calculator function

```js
function calc(a, b, op) {
    switch(op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b !== 0 ? a / b : "Err";
        default: return "Invalid";
    }
}
```

### 21. Count vowels

```js
function countVowels(s) {
    let c = 0;
    for (let ch of s.toLowerCase())
        if ("aeiou".includes(ch)) c++;
    return c;
}
```

### 22. Fibonacci up to n terms

```js
function fib(n) {
    let a = 0, b = 1;
    console.log(a);
    if (n > 1) console.log(b);
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}
```

### 23. Min & Max from array

```js
function minMax(arr) {
    return { 
        min: Math.min(...arr), 
        max: Math.max(...arr) 
    };
}
```

### 24. Simple Menu Program (switch-case)

```js
function menu(a, b, choice) {
    switch(choice) {
        case 1: return a + b;
        case 2: return a - b;
        case 3: return a * b;
        case 4: return b !== 0 ? a / b : "Err";
        default: return "Invalid";
    }
}
```

### 25. Armstrong number

```js
function isArmstrong(n) {
    const digits = String(n).split("");
    const pow = digits.length;
    let sum = 0;

    for (let d of digits)
        sum += Number(d) ** pow;

    return sum === n;
}
```

---

## Extra Task (WebKata Problems)

### A. Change text color of element with id `sid` to blue

```js
document.getElementById("sid").style.color = "blue";
```

### B. Display length of input field with id `myLength`

```js
const inp = document.getElementById("myLength");
const out = document.getElementById("sid");

inp.addEventListener("input", () => {
    out.textContent = inp.value.length;
});
```

### C. Add values from input fields `in1` & `in2`

```js
const a1 = document.getElementById("in1");
const a2 = document.getElementById("in2");
const res = document.getElementById("result");

function update() {
    res.textContent = Number(a1.value) + Number(a2.value);
}

a1.addEventListener("input", update);
a2.addEventListener("input", update);
```
