function allNonConsecutive(arr) {
    let res = []
    arr.forEach((v, index) => {
        if(v !== arr[index - 1] + 1 && index) {
            res.push({i: index, n: v});
        };
    })
    return res;
}
console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]));