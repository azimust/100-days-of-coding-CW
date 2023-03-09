function swap (string) {
    return string.replace(/[aeuio]/gi, e => e.toUpperCase());
}
console.log(swap('Hello World!'));