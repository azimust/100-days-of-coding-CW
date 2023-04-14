function titleToNumber(title) {
    let arr = [];
    title.split('').map(e => {
        let s = e.charCodeAt(0) - 64;
        arr.push(s)
    })
    return arr.reduce((a, b) => a * 26 + b, 0);
}
console.log(titleToNumber('AZ'));