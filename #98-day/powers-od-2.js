function powersOfTwo(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(Math.pow(2, i))
    }
    return arr
}

console.log(powersOfTwo(4));