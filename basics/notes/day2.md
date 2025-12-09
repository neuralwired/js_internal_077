# Investigation study on variables:

* JavaScript provides object wrappers (Number, String, Boolean, Symbol, BigInt), but primitives are not objects themselves.

* When methods are invoked on primitives, JavaScript temporarily boxes them into their wrapper objects behind the scenes.

---
| Type        | typeof return value | Object wrapper |
|:-----------:|:-------------------:|:--------------:|
| Null        | "object"            | N/A            |
| Undefined   | "undefined"         | N/A            |
| Boolean     | "boolean"           | Boolean        |
| Number      | "number"            | Number         |
| BigInt      | "bigint"            | BigInt         |
| String      | "string"            | String         |
| Symbol      | "symbol"            | Symbol         |

### For more information, read the JS Standard [ECMA-262](https://tc39.es/ecma262/)

---

### Setup

```js
let a = 23
const b = "abc"
var c = 78
d = 88
````

* Display all the values of the above variables:

```js
console.log(a, b, c, d)   // 23 "abc" 78 88
```

* Try to change the value of each variable and display error messages if any:

```js
try {
    a = 34; b = "def"; c = 56; d = 77
}
catch (e) {
    console.log("Error:", e.message)   // Assignment to constant variable.
}
```

* Redeclare the variables with the same names, initialize them with new values, and display the output:

```js
console.log(a, b, c, d)   // 34 "abc" 56 77
```

---

## Date

## Timestamp

---

## Type conversion

```js
let score = "33abcd"

console.log(typeof(score))   // "string"
console.log(typeof score)    // "string"
```

* `score` is a string.

```js
let scoreNum = Number(score)

console.log(scoreNum, typeof(scoreNum))   // NaN "number"
console.log(typeof scoreNum)              // "number"
```

* Non-numeric string -> `NaN` (still type `"number"`).

---

## Redeclared variables check

```js
let a = "abc"
let b = ""
let c = null
let d

console.log(a, b, c, d)   // "abc" "" null undefined
```

* Displays the assigned and default values.

```js
console.log(typeof(a))   // "string"
console.log(typeof(b))   // "string"
console.log(typeof(c))   // "object"
console.log(typeof(d))   // "undefined"
```

* Matches the primitive type table above.
