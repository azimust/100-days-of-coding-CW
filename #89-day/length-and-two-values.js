function alternate(n, firstValue, secondValue){
    // your code
    let arr = [];
    for(let i = 0; i < n; i++) {
        arr.push(i % 2 === 0 ? firstValue : secondValue)
    }
    return arr
}

console.log(alternate(5, "blue", "red"));