let marks = [80, 90, 70, 85, 95];

const avgMarks = marks.reduce((acc, cur) => acc + cur, 0) / marks.length;

console.log(`Average of marks [${marks}] is ${avgMarks}.`)