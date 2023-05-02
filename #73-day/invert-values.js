function invert(array) {
    // let arr = [];
    // array.map(v => {
    //     if (v > 0) {
    //         arr.push(parseInt('-' + v))
    //     } else if (v === 0) {
    //         arr.push(0)
    //     } else {
    //         arr.push(parseInt(v.toString().split('').slice(1).join('')))
    //     }
    // })
    // return arr
    return array.map(v => -v)
}
console.log(invert([1, 2, 4, -4]));