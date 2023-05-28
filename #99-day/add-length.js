function addLength(str) {
    //start-here
    let arr = [];
    str.split(' ').map(e => {
        arr.push(e + ' ' + e.length)
    })
    return arr
}
console.log(addLength('apple banana'));