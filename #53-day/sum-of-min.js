function sumOfMinimums(arr) {
    // your code here
    let arrMin = [];
    arr.map(v => {
        arrMin.push(Math.min(...v))
    });
    return arrMin.reduce((a, b) => a + b, 0);
}
console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));