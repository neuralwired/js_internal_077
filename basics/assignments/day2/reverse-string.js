function rev(s) {
    let r = "";
    for (let i = s.length - 1; i >= 0; i--)
        r += s[i];
    return r;
}
console.log("Reverse of 'hello' is:", rev("hello"));