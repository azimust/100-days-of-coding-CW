function add(...input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        let result = input[i] / (i + 1);
        arr.push(result);
    };
    let sum = arr.reduce((a, b) => a + b, 0);
    return Math.round(sum);
}
console.log(add(4, -3, -2));