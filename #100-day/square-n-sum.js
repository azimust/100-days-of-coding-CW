function squareSum(numbers){
    let res = [];
    numbers.map(v => {
        res.push(v * v)
    })
    return res.reduce((a, b) => a + b, 0)
}

console.log(squareSum([0, 3, 4, 5]));