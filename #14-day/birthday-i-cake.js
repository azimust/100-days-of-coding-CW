function cake(x, y){
    let num = y.split('').reduce((a, b, i) => a + (i % 2 === 0 ? b.charCodeAt(0) : b.charCodeAt(0) - 96), 0);
    return x * 0.7 > num ? 'That was close!': 'Fire!';
}
console.log(cake(900, 'abcdef'));