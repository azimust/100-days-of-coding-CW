function sumEvenNumbers(input) {
    // [...]
    let evenArr = [];
    input.map(v => {
        if(v % 2 === 0) {
            evenArr.push(v)
        }
    });
    return evenArr.reduce((a, b) => a + b, 0);
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));