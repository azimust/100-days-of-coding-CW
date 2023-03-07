function arithmeticSequenceElements(a, d, n) {
    let arr = [a];
    while(--n){
        arr.push(a += d)
    }
    return arr.join(', ')
};
console.log(arithmeticSequenceElements(1, 2, 5));