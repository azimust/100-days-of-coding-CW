function noOdds(values) {
    // Return all non-odd values
    let odd = [];
    values.map(v => {
        if(v % 2 === 0) {
            odd.push(v)
        }
    })
    return odd
}
console.log(noOdds([0, 1, 2, 3]));