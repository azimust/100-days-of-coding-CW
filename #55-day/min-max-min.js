function minMinMax(array) {
    // solution goes here!
    let min = Math.min(...array);
    let max = Math.max(...array);
    for(let i = min; i < max; i++) {
        if(!array.includes(i)){
            return [min, i, max]
        }
    }
}
console.log(minMinMax([-1, 4, 5, -23, 24]));