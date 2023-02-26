function zipWith(fn,a0,a1) {
    let arr = [];
    let short = Math.min(a0.length, a1.length);
    for(let i = 0; i < short; i++){
        arr.push(fn(a0[i], a1[i]));
    }
    return arr;
}
console.log(zipWith(Math.pow, [10,10,10,10], [0,1,2,3]));