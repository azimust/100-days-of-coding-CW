function sumNoDuplicates(numList) {
    let sum = [];
    numList.forEach(n => {
        if(numList.indexOf(n) === numList.lastIndexOf(n)) {
            sum.push(n);
        }
    })
    return sum.reduce((a, b) => a + b, 0);
}
console.log(sumNoDuplicates([3, 4, 3, 6]));