function flip(fn) {
    return (...args) => fn(...(args.reverse()))
    // return `'${fn.reverse().join(' -> ')}'`
}
console.log(flip(5, 2));