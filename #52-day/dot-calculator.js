function dotCalculator (equation) {
	const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '//': (a, b) => a / b,
    };
    const [left, operator, right] = equation.split(' ');
    return '.'.repeat(operations[operator](left.length, right.length));
}
console.log(dotCalculator('..... - ...'));