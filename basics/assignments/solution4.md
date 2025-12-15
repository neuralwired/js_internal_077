# **Assignment 4: JavaScript (Day-4)**

**DOM & Events** 

---

## **Task 1: Change Text on Button Click**

```html
<p id="text">Hello</p>
<button onclick="changeText()">Click</button>

<script>
function changeText() {
    document.getElementById("text").textContent = "Welcome to JavaScript!";
}
</script>
```

---

## **Task 2: Background Color Changer**

```html
<button onclick="setColor('red')">Red</button>
<button onclick="setColor('blue')">Blue</button>
<button onclick="setColor('green')">Green</button>

<script>
function setColor(color) {
    document.body.style.backgroundColor = color;
}
</script>
```

---

## **Task 3: Image Switcher (Next / Previous)**

```html
<img id="img" src="img1.jpg" width="200">
<br>
<button onclick="prev()">Previous</button>
<button onclick="next()">Next</button>

<script>
let images = ["img1.jpg", "img2.jpg"];
let index = 0;

function next() {
    index = (index + 1) % images.length;
    document.getElementById("img").src = images[index];
}

function prev() {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("img").src = images[index];
}
</script>
```

---

## **Task 4: Show / Hide Paragraph**

```html
<p id="para">This is a paragraph</p>
<button onclick="toggle()">Show / Hide</button>

<script>
function toggle() {
    let p = document.getElementById("para");
    p.style.display = (p.style.display === "none") ? "block" : "none";
}
</script>
```

---

## **Task 5: Counter App**

```html
<button onclick="decrease()">-</button>
<span id="count">0</span>
<button onclick="increase()">+</button>

<script>
let count = 0;

function increase() {
    count++;
    document.getElementById("count").textContent = count;
}

function decrease() {
    if (count > 0) count--;
    document.getElementById("count").textContent = count;
}
</script>
```

---

## **Task 6: Create Element Dynamically**

```html
<button onclick="addBox()">Add Box</button>

<script>
function addBox() {
    let div = document.createElement("div");
    div.textContent = "Box";
    div.style.border = "1px solid black";
    div.style.padding = "10px";
    div.style.margin = "10px";
    div.style.background = "#eee";
    document.body.appendChild(div);
}
</script>
```

---

## **Task 7: Form Input Reader**

```html
<input type="text" id="name" placeholder="Enter name">
<button onclick="showName()">Submit</button>
<p id="output"></p>

<script>
function showName() {
    let name = document.getElementById("name").value;
    document.getElementById("output").textContent = name;
}
</script>
```

---

## **Task 8: Todo List**

```html
<input type="text" id="task">
<button onclick="addTask()">Add Task</button>
<ul id="list"></ul>

<script>
function addTask() {
    let li = document.createElement("li");
    li.textContent = document.getElementById("task").value;
    document.getElementById("list").appendChild(li);
}
</script>
```

---

## **Task 9: Attribute Change (Image Size)**

```html
<img id="pic" src="img.jpg" width="200">
<br>
<button onclick="small()">Small</button>
<button onclick="large()">Large</button>

<script>
function small() {
    document.getElementById("pic").setAttribute("width", "100");
}

function large() {
    document.getElementById("pic").setAttribute("width", "300");
}
</script>
```

---

## **Task 10: Theme Switcher**

```html
<button onclick="toggleTheme()">Toggle Theme</button>

<script>
let dark = false;

function toggleTheme() {
    document.body.style.backgroundColor = dark ? "white" : "black";
    document.body.style.color = dark ? "black" : "white";
    dark = !dark;
}
</script>
```

---

## **Task 11: Live Clock**

```html
<p id="clock"></p>

<script>
setInterval(() => {
    document.getElementById("clock").textContent = new Date().toLocaleTimeString();
}, 1000);
</script>
```

---

## **Task 12: Random Quote Generator**

```html
<button onclick="newQuote()">New Quote</button>
<p id="quote"></p>

<script>
let quotes = [
    "Code is poetry",
    "Practice makes perfect",
    "JavaScript is powerful"
];

function newQuote() {
    let i = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[i];
}
</script>
```