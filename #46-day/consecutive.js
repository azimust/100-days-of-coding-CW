function consecutive(arr) {
    //code me
    let l = arr.length;
    return l ? Math.max(...arr) - Math.min(...arr) - l + 1 : 0;
}
console.log(consecutive([4, 8, 6]));