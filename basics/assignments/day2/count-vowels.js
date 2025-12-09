function countVowels(s) {
    let c = 0;
    for (let ch of s.toLowerCase())
        if ("aeiou".includes(ch)) c++;
    return c;
}
const str = "Hello, World!"
console.log(`Number of vowels in ${str} is:`, countVowels(str));