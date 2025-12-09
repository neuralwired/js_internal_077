function grade(m) {
    if (m >= 90) return "A";
    if (m >= 75) return "B";
    if (m >= 50) return "C";
    return "Fail";
}
console.log("Grade for 85 is:", grade(85));