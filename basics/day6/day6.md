- Home page
- Login + Register using forms
- After login show userId

```js
let params = new URLSearchParams(window.location.search);
```



```// nxt.html```

```html
<body>
    <h1 id="hd1">This is the mext page</h1>
<script>
    let params = new URLSearchParams(window.location.search);
    let name = params.get("firstname");
    document.getElementById("hd1").innerHTML = `Welcome ${name}!`;
</script>
```