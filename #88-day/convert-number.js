function digitize(n) {
  //code here
    let arr = [];
    let rev = n.toString().split('').reverse();
    rev.map(v => {
        arr.push(parseInt(v))
    })
    return arr
}
console.log(digitize(1234));