function addingShifted(arrayOfArrays, shift) {
    let res = [];
    let start = 0;
    for(let arr of arrayOfArrays) {
        for(let i = 0; i < arr.length; i++) {
            res[start + i] = (res[start + i] || 0) + arr[i];
        }
        start += shift;
    }
    return res;
}
console.log(addingShifted([[1, 2, 3, 4, 5, 6], [7, 7, 7, 7, 7, -7]], 0));