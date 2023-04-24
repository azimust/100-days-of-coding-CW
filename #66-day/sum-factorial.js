function sumFactorial(arr){
    let res = [];
    arr.map(v => {
        let f = 1;
        for(let i = 1; i <= v; i++) {
            f *= i;
        }
        res.push(f)
    })
    return res.reduce((a, b) => a + b, 0);
}
console.log(sumFactorial([4, 6]));