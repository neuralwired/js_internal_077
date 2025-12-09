function minMax(arr) {
    return { 
        min: Math.min(...arr), 
        max: Math.max(...arr) 
    };
}
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const result = minMax(arr);
console.log(`Min: ${result.min}, Max: ${result.max}`);