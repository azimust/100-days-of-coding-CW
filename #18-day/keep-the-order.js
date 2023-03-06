function keepOrder(ary, val) {
    // your code here
    let arr = [val];
    ary.map((v) => {
        arr.push(v);
    });

    arr.sort((a, b) => a - b);

    return arr.indexOf(val);
}
console.log(keepOrder([1, 2, 3, 4], 5));