function findMultiples(integer, limit) {
    //your code here
    let arr = [];
    //   for(let i = 1; i <= Math.floor(limit / integer); i++) {
    //     arr.push(integer * i)
    //   }
    for (let i = integer; i <= limit; i+=integer) {
        arr.push(i)
    }
    return arr;
}
console.log(findMultiples(2, 6));