# **Assignment 3: JavaScript (Day-3)**

## **Part-A: Arrays, Higher-Order Methods, Objects, JSON**

---

### **1. Student Marks → Average using reduce()**

```js
let marks = [80, 90, 70, 85, 95];

const avgMarks = marks.reduce((acc, m) => acc + m, 0) / marks.length;
// Average: 84
```

---

### **2. Filter Even Numbers**

```js
let numbers = [1,2,3,4,5,6,7,8,9];

const evens = numbers.filter(n => n % 2 === 0);
```

---

### **3. Shopping Cart → Total Bill**

```js
let cart = {
    item: "Laptop",
    price: 45000,
    quantity: 2
};

const totalBill = cart.price * cart.quantity;
```

---

### **4. Movie List**

```js
let movies = ["Inception", "Interstellar", "Dunkirk"];

// Add
movies.push("Tenet");

// Remove last
movies.pop();

// Print final list
for (let m of movies) console.log(m);
```

---

### **5. User Profile JSON**

```js
let user = { name: "Aman", age: 21, course: "JS" };

let jsonString = JSON.stringify(user);
let userObj = JSON.parse(jsonString);
```

---

### **6. Max Number without Math.max**

```js
let arr = [10, 40, 25, 80, 15];

let max = arr.reduce((acc, n) => n > acc ? n : acc, arr[0]);
```

---

### **7. Transform Names → Uppercase**

```js
let names = ["ram", "shyam", "mohan"];

let upperNames = names.map(n => n.toUpperCase());
```

---

# **Part-B: Webkata Tasks (4 to 7)**

### **4. Change text of element with id `hello`**

```js
document.getElementById("hello").textContent = "Hello by JavaScript";
```

---

### **5. Hide element with id `hello`**

```js
document.getElementById("hello").style.display = "none";
```

---

### **6. Display "Hello World!" in existing `<p>` with id `demo`**

```js
document.getElementById("demo").textContent = "Hello World!";
```

---

### **7. Display "Hello from Guvian!" (no `<p>` initially)**

```js
document.body.innerHTML += "<p>Hello from Guvian!</p>";
```