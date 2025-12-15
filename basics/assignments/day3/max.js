let arr = [10, 40, 25, 80, 15]

let max = arr.reduce((acc, n) => n > acc ? n : acc, arr[0])

console.log(`Max([${arr}]) = ${max}.`)