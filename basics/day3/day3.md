# **1. Arrays**

### **What is an Array?**

An array stores multiple values in a single variable. Indexing starts from `0`.

```javascript
let fruits = ["apple", "banana", "strawberry", "mango", "peach"];
console.log(...fruits);
```

### **Access Example**

```
fruits[0] // apple
fruits[1] // banana
fruits[2] // strawberry
```

---

## **Common Array Methods**

| Operation    | Description                                             |
| ------------ | ------------------------------------------------------- |
| `push()`     | Add item at the end                                     |
| `pop()`      | Remove last item                                        |
| `shift()`    | Remove first item                                       |
| `unshift()`  | Add item at the beginning                               |
| `includes()` | Checks if value exists                                  |
| `indexOf()`  | Returns first occurrence index, if not found returns -1 |

---

## **Array Operations**

### **Looping through Arrays**

```javascript
fruits.forEach(fruit => console.log(fruit));

for (let fruit of fruits) {
    console.log(fruit);
}
```

---

### **push() – Add at end**

```javascript
fruits.push("papaya");
console.log(...fruits);
```

### **pop() – Remove last**

```javascript
fruits.pop();
console.log(...fruits);
```

---

### **unshift() – Add at beginning**

```javascript
fruits.unshift("kiwi");
console.log(...fruits);
```

### **shift() – Remove first**

```javascript
fruits.shift();
console.log(...fruits);
```

---

### **includes() – Check existence**

```javascript
let bananaExists = fruits.includes("mango");
console.log(bananaExists);
```

### **indexOf() – Find index**

```javascript
let index = fruits.indexOf("banana");
console.log(index);
```

---

# **2. Higher-Order Array Methods**

Higher-order functions accept another function as an argument.

---

## **map()**

Creates a new array by transforming each element.

```javascript
let numbers = [1, 2, 3];
console.log(numbers);

let numbersDoubled = numbers.map(number => number * 2);
console.log(numbersDoubled);
```

---

## **filter()**

Returns a new array containing values that satisfy a condition.

```javascript
let numbers = [10, 25, 30, 40];
console.log(numbers);

let result = numbers.filter(number => number > 20);
console.log(result);
```

---

## **reduce()**

Executes reducer function to produce a single output value.

The `reduce()` method iterates through an array and reduces it to a single final value (sum, product, etc.).

**Syntax**

```js
array.reduce((accumulator, currentValue) => {
    // logic
}, initialValue);
```

* **accumulator (acc)** – holds ongoing result
* **currentValue (val)** – current element
* **initialValue** – starting value

### Example

```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(numbers, sum);
```

---

# **3. Objects**

### **Creating an Object**

```javascript
let student = {
    name: "Anubhav Kesarwani",
    age: 22,
    course: "JavaScript"
};
console.log(student);
```

### **Adding a Property**

```javascript
student.city = "Prayagraj";
console.log(student);
```

### **Deleting a Property**

```javascript
delete student.age;
console.log(student);
```

### **Looping through Object**

```javascript
for (detail in student) {
    console.log(detail, student[detail]);
}
```

## **Nested Objects**

```javascript
let person = {
    name: "Anubhav Kesarwani",
    address: {
        city: "Prayagraj",
        country: "India"
    }
};
```

### **Print city from nested address**

```javascript
console.log(person.address.city);
```

### **Change nested city to "Mumbai"**

```javascript
person.address.city = "Mumbai";
console.log(person.address.city);
```

---

# **4. JSON (JavaScript Object Notation)**

JSON is a lightweight data format used for APIs.
Unlike objects, keys must be inside quotes.

### **Convert Object → JSON String**

```javascript
let jsonString = JSON.stringify(student);
console.log(jsonString);
```

### **Convert JSON → Object**

```javascript
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
```